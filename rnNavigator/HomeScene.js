/**
 * Home Scene for rnNavigator sample application
 * https://github.com/gergob/reactNativeSamples/rnNavigator
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class HomeScene extends Component {
  static get defaultProps() {
    return {
      title : 'Home'
    };
  }

  render() {
    return (
      <View>
        <Text>This is {this.props.title}.</Text>
      </View>
    );
  }
}
