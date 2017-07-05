import React from 'react';
import { View } from 'react-native';
import Graph from './Graph';

export default class GraphCtr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpi: [[
        {
          x: 0,
          y: 0,
        }
      ]],
      dates: [],
    }
  }
  componentDidMount() {
    this._fetchData();
  }
  _fetchData() {
    fetch('http://api.coindesk.com/v1/bpi/historical/close.json')
      .then(response => { return response.json() })
      .then(data=> {
        this.setState({
          bpi: this._formatData(data.bpi),
          // dates: this._getDates(data.bpi),
        })
      })
      .catch(err => console.log('error', err))
  }
  _getDates(data) {
    return Object.keys(data);
  }
  _formatData(data) {
    const xs = Object.keys(data);
    return xs.map((x, i) => ({ x: i, y: data[x] }))
  }
  render() {
    return (
      <View>
        <Graph data={this.state.bpi} xAxis={this.state.dates} />
      </View>
    )
  }
}