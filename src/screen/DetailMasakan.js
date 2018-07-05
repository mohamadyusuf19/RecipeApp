import React, { Component } from 'react';
import {  ScrollView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import Header from '../components/Header';

const shareIcon = require('../assets/share.png')
const bookmarkIcon = require('../assets/bookmark.png')

export default class DetailMasakan extends Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {    
    const data1 = _.get(this.props.navigation.state, 'params.detail[1]')
    const data2 = _.get(this.props.navigation.state, 'params.detail[3]')
    console.log( _.get(this.props.navigation.state, 'params.detail[3]'))
    return (
      <View>
        {/* <Header
            header={this.props.navigation.state.params.detail[0]}
        />         */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{this.props.navigation.state.params.detail[0]}</Text>
          <TouchableOpacity>
            <Image source={shareIcon} style={{ height: 25, width: 25, marginRight: 8, }} />
          </TouchableOpacity>          
        </View>        
        <ScrollView>
          <Image
              source={{ uri : this.props.navigation.state.params.detail[2] }}
              style={styles.image}
          />          
          <View style={styles.function}>
            <TouchableOpacity>
              <Image source={bookmarkIcon} style={{ height: 25, width: 25 }} />            
            </TouchableOpacity>            
          </View>
          <Text style={styles.titleContain}>Description :</Text>
          <Text style={styles.steps}>{this.props.navigation.state.params.detail[4]}</Text>
          <Text style={styles.titleContain}>Ingredients :</Text>
          <FlatList
            data={data2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}      
          />
          <Text style={styles.titleContain}>Steps :</Text>
          <FlatList
            data={data1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}      
          />
        </ScrollView>        
      </View>
    );
  }

  renderItem = ({ item, index }) => {    
    console.log(item)        
    return (
      <View style={styles.container}>
        <Text style={styles.steps}>{index + 1}. {item}</Text>
      </View>      
    )
  }

  _renderItem = ({ item, index }) => {    
    console.log(item)        
    return (
      <View style={styles.container}>
        <Text style={styles.steps}>{index + 1}.{item.type} {this.capitalizeFirstLetter(`${item.name}`)} {item.quantity}</Text>
      </View>      
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
      height: 200,     
    },
    titleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 5
    },
    title: {
      fontSize: 18,
      marginLeft: 8,      
      color: '#000',
      marginBottom: 20,
      marginTop: 20,      
    },    
    function: {
      height: 40,
      margin: 8,
      alignItems: 'flex-end',
      justifyContent: 'space-between',      
    },
    steps: {
      margin: 8,
      fontSize: 16,
      color: '#000'
    },
    titleContain: {
      fontSize: 16,
      fontWeight: '800',
      color: '#000',
      marginLeft: 8,
      marginTop: 8
    }
})