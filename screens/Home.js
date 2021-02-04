import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, theme, Text } from "galio-framework";

const { width } = Dimensions.get("screen");

class Home extends React.Component {


  render() {
    return (
      <Block flex center style={styles.home}>
      
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
