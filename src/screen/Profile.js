import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import Header from '../components/Header';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Header
            header="Profile"
        />
        <Text> profile </Text>
      </View>
    );
  }
}
