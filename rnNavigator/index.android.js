/**
 * rnNavigator sample application
 * https://github.com/gergob/reactNativeSamples/rnNavigator
 * @flow
 */

import React, { Component } from 'react';
import HomeScene from './HomeScene';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class rnNavigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My First Scene', index: 0 }}
        renderScene={(route, navigator) => {
          return <HomeScene title={route.title} />
        }}
      />
    );
  }
}


AppRegistry.registerComponent('rnNavigator', () => rnNavigator);
