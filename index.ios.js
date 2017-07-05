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
  View
} from 'react-native';
import { StockLine } from 'react-native-pathjs-charts'
import GraphCtr from './iossrc/components/GraphCtr';
import Swiper from 'react-native-swiper';

import './iossrc/config/consoleConfig';
import './iossrc/config/requestViewConfig';

export default class CoinbankWalletV1 extends Component {
  render() {
 
    return (
      <View style={styles.container}>
        <Swiper>
          <View>
            <Text>test test test </Text>
          </View>
          <GraphCtr />
        </Swiper>
      </View>
    )
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

AppRegistry.registerComponent('CoinbankWalletV1', () => CoinbankWalletV1);
