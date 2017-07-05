import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { StockLine } from 'react-native-pathjs-charts';
import moment from 'moment';

export default function Graph({ data }) {
  let options = {
      width: 250,
      height: 250,
      color: '#2980B9',
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [],
        labelFunction: ((v) => {
          let d = moment('2016-10-08 14:00','YYYY-MM-DD HH:mm')
          return d.add((v * 2),'hours').format('h:mm A')
        }),
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }
    let graphData = [[...data.slice()]];
    // data = [
    console.log('data', data);
  return (
    <View>
      <StockLine data={graphData} options={options} xKey='x' yKey='y' />
    </View>
  )
}