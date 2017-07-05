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
import moment from 'moment'
import GraphCtr from './iossrc/components/GraphCtr';

import './iossrc/config/consoleConfig';
import './iossrc/config/requestViewConfig';

export default class CoinbankWalletV1 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     bpi: [[
  //       {
  //         x: 0,
  //         y: 0,
  //       }
  //     ]],
  //     dates: [],
  //   }
  // }
  // componentDidMount() {
  //   this._fetchData();
  // }
  // _fetchData() {
  //   fetch('http://api.coindesk.com/v1/bpi/historical/close.json')
  //     .then(response => { return response.json() })
  //     .then(data=> {
  //       this.setState({
  //         bpi: this._formatData(data.bpi),
  //         // dates: this._getDates(data.bpi),
  //       })
  //     })
  //     .catch(err => console.log('error', err))
  // }
  // _getDates(data) {
  //   // return Object.keys(data);
  // }
  // _formatData(data) {
  //   const xs = Object.keys(data);
  //   return xs.map((x, i) => ({ x: i, y: data[x] }))
  // }
  render() {
    // let options = {
    //   width: 250,
    //   height: 250,
    //   color: '#2980B9',
    //   margin: {
    //     top: 10,
    //     left: 35,
    //     bottom: 30,
    //     right: 10
    //   },
    //   animate: {
    //     type: 'delayed',
    //     duration: 200
    //   },
    //   axisX: {
    //     showAxis: true,
    //     showLines: true,
    //     showLabels: true,
    //     showTicks: true,
    //     zeroAxis: false,
    //     orient: 'bottom',
    //     tickValues: [],
    //     labelFunction: ((v) => {
    //       let d = moment('2016-10-08 14:00','YYYY-MM-DD HH:mm')
    //       return d.add((v * 2),'hours').format('h:mm A')
    //     }),
    //     label: {
    //       fontFamily: 'Arial',
    //       fontSize: 8,
    //       fontWeight: true,
    //       fill: '#34495E'
    //     }
    //   },
    //   axisY: {
    //     showAxis: true,
    //     showLines: true,
    //     showLabels: true,
    //     showTicks: true,
    //     zeroAxis: false,
    //     orient: 'left',
    //     tickValues: [],
    //     label: {
    //       fontFamily: 'Arial',
    //       fontSize: 8,
    //       fontWeight: true,
    //       fill: '#34495E'
    //     }
    //   }
    // }
    // let data = [[...this.state.bpi.slice()]];
    // // data = [
    // console.log('data', data);
    //   [{
    //     "x": -10,
    //     "y": -1000
    //   }, {
    //     "x": -9,
    //     "y": -729
    //   }, {
    //     "x": -8,
    //     "y": -512
    //   }, {
    //     "x": -7,
    //     "y": -343
    //   }, {
    //     "x": -6,
    //     "y": -216
    //   }, {
    //     "x": -5,
    //     "y": -125
    //   }, {
    //     "x": -4,
    //     "y": -64
    //   }, {
    //     "x": -3,
    //     "y": -27
    //   }, {
    //     "x": -2,
    //     "y": -8
    //   }, {
    //     "x": -1,
    //     "y": -1
    //   }, {
    //     "x": 0,
    //     "y": 0
    //   }, {
    //     "x": 1,
    //     "y": 1
    //   }, {
    //     "x": 2,
    //     "y": 8
    //   }, {
    //     "x": 3,
    //     "y": 27
    //   }, {
    //     "x": 4,
    //     "y": 64
    //   }, {
    //     "x": 5,
    //     "y": 125
    //   }, {
    //     "x": 6,
    //     "y": 216
    //   }, {
    //     "x": 7,
    //     "y": 343
    //   }, {
    //     "x": 8,
    //     "y": 512
    //   }, {
    //     "x": 9,
    //     "y": 729
    //   }, {
    //     "x": 10,
    //     "y": 1000
    //   }]
    // ]
    return (
      <View style={styles.container}>
        <GraphCtr />
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
