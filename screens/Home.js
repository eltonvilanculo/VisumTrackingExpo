import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, theme, Text } from "galio-framework";
import {Map} from '../components/Map' ; 
import {firebase} from '../controllers/firebase.controller'

const { width } = Dimensions.get("screen");

class Home extends React.Component {

  state={
    latitude : 0 ,
    longitude : 0 
  }

  componentDidMount() { 
    firebase.database().ref('realtimelocation/865011030505771').on('value', (snapshot) => {
      // console.log(`snapshot` , snapshot.val())
      const data = snapshot.val();
      this.setState({latitude:data.lat , longitude:data.lng})


     });
  }   
 
  


  render() {
    const {latitude , longitude} = this.state;

    console.log(latitude)
    return (
      <Block flex center style={styles.home}>
      
      <Map latitude={latitude} longitude = {longitude} />
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
