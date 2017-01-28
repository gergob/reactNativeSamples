/**
 * Home Scene for rnNavigator sample application
 * https://github.com/gergob/reactNativeSamples/rnNavigator
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Navigator, StyleSheet } from 'react-native';

export default class HomeScene extends Component {
  static get defaultProps() {
    return {
      title : 'Home'
    };
  }

  render() {
    return (
      <View style={styles.homeScene}>
        <Text style={styles.title}>This is {this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScene: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  }
});
