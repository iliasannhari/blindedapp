import React from 'react';
import styles from '../styles'
import RootNavigator from '../navigation/RootNavigator';
import { connect } from 'react-redux';
import { login } from '../redux/actions'
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase.js'
firebase.initializeApp(firebaseConfig);

import { 
  Text, 
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'


class Login extends React.Component {
  
  state = {}


  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.props.dispatch(login(user))
        console.log("We are authenticated now!" + JSON.stringify(user.displayName));
      }
    })  
  }

  login = async () => {

    //ENTER YOUR APP ID 
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2121167294866319', { permissions: ['public_profile'] })
    if (type == 'success') {

      const credential = await firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error) => {
        Alert.alert("Try Again")
      })
    }
  }

  render() {
    if(this.props.loggedIn){
      return (
        <RootNavigator/>
      )
    }else{
      return (
        <Container style={styles.container}>
          <Form style={styles.form}>

            <Image style={ styles.loginlogo } source={require('../assets/blinded-logo.png')}/>

            <TouchableOpacity onPress={this.login.bind(this)}>
              <Text style={ styles.buttonLogin }>Log in with Facebook</Text>
            </TouchableOpacity>
            <Text style={ styles.textinfo } >We do not post anything on Facebook</Text>

          </Form>
        </Container>



      );
    }
    
  }


 


}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(Login);