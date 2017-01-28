/**
 * rnNavigator sample application
 * https://github.com/gergob/reactNativeSamples/rnNavigator
 * @flow
 */

import React, { Component } from 'react';
import HomeScene from './HomeScene';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class rnNavigator extends Component {
  render() {
    return (
      <HomeScene />
    );
  }
}


AppRegistry.registerComponent('rnNavigator', () => rnNavigator);
