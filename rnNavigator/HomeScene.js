/**
 * Home Scene for rnNavigator sample application
 * https://github.com/gergob/reactNativeSamples/rnNavigator
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class HomeScene extends Component {
  static get defaultProps() {
    return {
      title : 'Home'
    };
  }

  render() {
    return (
      <View style={styles.homeScene}>
        <Text style={styles.title}>{this.props.title}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.goToNextScene}>
            <Text style={styles.buttonText}>Go Deeper</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.goToPreviousScene}>
            <Text style={styles.buttonText}>Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09573F'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#4D9B7F',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  }
});

HomeScene.propTypes = {
  title: PropTypes.string.isRequired,
  goToNextScene: PropTypes.func.isRequired,
  goToPreviousScene: PropTypes.func.isRequired,
};
