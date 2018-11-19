import React from 'react';
import styles from '../styles'
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { updateAbout, logout } from '../redux/actions'

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

class Profile extends React.Component {


  render() {
    return (

        <ScrollView>
          <View style={[styles.container, styles.center]}>
            <View style={styles.container}>
              <Image style={styles.img} source={{uri: this.props.user.photoUrl}}/>
              <Text style={[styles.center, styles.bold]} >{this.props.user.name}</Text>
            </View>

            <Text style={styles.bold}>About</Text>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => this.props.dispatch(updateAbout(text))}
              value={this.props.user.aboutMe}/>
          </View>
          <TouchableOpacity onPress={ () => this.props.dispatch(logout()) }>
            <Text style={ styles.buttonLogout }>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Profile);
