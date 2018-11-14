import * as firebase from 'firebase';
import Geohash from 'latlon-geohash';
import { Location, Permissions } from 'expo';


export function login(user){
  return function(dispatch){
		let params = {
		  id: user.uid,
		  photoUrl: user.photoURL,
		  name: user.displayName,
		  aboutMe: ' ',
		  chats: ' ',
		  geocode: ' ',
		  images: [user.photoURL],
		  notification: false,
		  show: false,
		  report: false,
		  swipes: {
		    [user.uid]: false
		  },
		  token: ' ', 
		}

		firebase.database().ref('cards/').child(user.uid).once('value', function(snapshot){
		  if(snapshot.val() !== null){
		    dispatch({ type: 'LOGIN', user: snapshot.val(), loggedIn: true });
		  } else {
 		    firebase.database().ref('cards/' + user.uid ).update(params);
		    dispatch({ type: 'LOGIN', user: params, loggedIn: true });
		  }
		  dispatch(getLocation())  
		})


  }
}

export function logout(){
	return function(dispatch){
    firebase.auth().signOut()
    dispatch({ type: 'LOGOUT', loggedIn: false });
   }
}

export function updateAbout(value){
	return function(dispatch){
		dispatch({ type: 'UPDATE_ABOUT', payload: value });
    setTimeout(function(){  
			firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({ aboutMe: value });
    }, 3000);
  }
}

export function getCards(geocode){
	return function(dispatch){
		firebase.database().ref('cards').orderByChild("geocode").equalTo(geocode).once('value', (snap) => {
		  var items = [];
		  snap.forEach((child) => {
		    item = child.val();
		    item.id = child.key;
		    items.push(item); 
		  });
		  dispatch({ type: 'GET_CARDS', payload: items });
		});
	}
}


export function getLocation(){
	return function(dispatch){
		Permissions.askAsync(Permissions.LOCATION).then(function(result){
		  if(result){
		    Location.getCurrentPositionAsync({}).then(function(location){
		      var geocode = Geohash.encode(location.coords.latitude, location.coords.longitude, 6)
		      firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({geocode: geocode});
		      dispatch({ type: 'GET_LOCATION', payload: geocode });
		    })
		  }
		})
	}
}