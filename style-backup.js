import React from 'react';
import { StyleSheet } from 'react-native';
var Dimensions = require('Dimensions');
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbbe2d'
  },
  color: {
  	color: '#df4723',
  	
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
  	width: deviceWidth,
  	height: deviceWidth,
  	borderRadius: 10,
  	margin: 10,
  	backgroundColor: '#fff',
  },
  imgRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 15,
  },
  loginlogo: {
    width: deviceWidth*.8,
    height: deviceWidth*.8,
    borderRadius: 10,
    margin: 10,
  },
  textinfo : {
    color: '#666666'
  },

  textInput: {
    width: deviceWidth,
    padding: 15,
    backgroundColor: '#fff',
    height: 100,
    backgroundColor: '#fbb222'

  },
  bold: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonLogin: {
    backgroundColor: '#3b5998',
	  borderRadius: 15,
	  borderWidth: 1,
	  borderColor: '#3b5998',
	  textAlign: 'center',
	  color: '#fff',
	  padding: 15,
	  margin: 15,
	  fontSize: 18,
	  fontWeight: 'bold',
  },
  buttonLogout: {
    backgroundColor: '#c30000',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#c30000',
    textAlign: 'center',
    color: '#fff',
    padding: 15,
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: deviceWidth*.9,
    height: deviceHeight*.7,
    borderRadius: 15,
  },
  cardDescription: {
    padding: 15,
    justifyContent: 'flex-end',
    flex: 1,
  },
  cardInfo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  
})

module.exports = styles