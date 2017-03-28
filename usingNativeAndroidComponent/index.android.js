/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import CustomToastAndroid from './src/nativeModules/CustomToastAndroid';

export default class usingNativeAndroidComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            CustomToastAndroid.show('Hello from JS', CustomToastAndroid.SHORT)
          }}
          title="Show Toast"
          color="#841584"
          accessibilityLabel="Show native Android Toast message from our module"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('usingNativeAndroidComponent', () => usingNativeAndroidComponent);
