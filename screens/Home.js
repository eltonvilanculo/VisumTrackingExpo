import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, theme, Text } from "galio-framework";
import {Map} from '../components/Map' ; 
import io from 'socket.io-client';

const SOCKET_URL = '52.59.234.96:10000';

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  socket = io.connect(SOCKET_URL, {
    transports: ['websocket'],
    reconnectionAttempts: 15 //Nombre de fois qu'il doit réessayer de se connecter
  });

  state = {
    conncted: false
  };
  
  componentDidMount() {
    this.onConnectSocket();
  }

  onConnectSocket = () => {
    
    if(this.socket) {
    
      this.socket.on('connect', () => {
        this.socket.emit('i-am-connected'); 

        
        this.setState({
          connected: true
        });
      });
    }
  }

  render() {
    return (
      <Block flex center style={styles.home}>
      
      <Map />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

  }
});

export default Home;
