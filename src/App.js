import React, { Component } from 'react';
import { View, StatusBar, YellowBox } from 'react-native';
import Navigator from './config/Routes';

export default class App extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Warning: isMounted'
    ];
  }

  render() {
    return (
     <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />
      <Navigator/>
     </View>     
    );
  }
}
