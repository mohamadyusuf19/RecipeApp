import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import Header from '../components/Header';

export default class Favorite extends Component {
  render() {
    return (
      <View>
        <Header
            header="Favorite"
        />
        <Text> favorite </Text>
      </View>
    );
  }
}
