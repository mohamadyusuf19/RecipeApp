import React, { Component } from 'react';
import {  View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Data from '../config/recipe.json';
import CardSection from '../components/CardSection';

const bookmarkIcon = require('../assets/bookmark.png')
const favoriteIcon = require('../assets/favorite.png')
const commentIcon = require('../assets/speech-bubble.png')

export default class Recipe extends Component {  
  uppercase(str) {
      var array1 = str.split(' ');
      var newarray1 = [];
        
      for(var x = 0; x < array1.length; x++){
          newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
      }
      return newarray1.join(' ');
  }
  
  showDetail(indexDetail) {
    this.props.navigation.navigate('DetailMasakan', {detail: indexDetail})
  }

  render() {
    console.log(Data)
    return (
      <View style={styles.container}>
        <Header
          header="EATING"
        />
        <FlatList
          data={Data}            
          keyExtractor={(x, i) => i.toString()}
          renderItem={this._renderItem}
        />
      </View>
    );
  }

  _renderItem = ({item}) => {    
    console.log(item.ingredients)
    return (
    <CardSection>
      <Text style={styles.title}>{item.name}</Text>                   
      <Image source={{ uri:item.imageURL }} style={styles.images} />
      <View style={styles.column}>
        <TouchableOpacity>
          <Image source={bookmarkIcon} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={favoriteIcon} style={styles.icon} key={item.name}/>      
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={commentIcon} style={styles.icon}/>        
        </TouchableOpacity>        
      </View>
      <Text style={styles.descriptionTitle}>Description :</Text>
      <Text style={styles.description}>{`${item.description}`.toLowerCase()}</Text>    
      <TouchableOpacity style={styles.button} onPress={() => this.showDetail([
        item.name,        
        item.steps,
        item.imageURL,
        item.ingredients,
        item.description      
      ])}>
        <Text style={styles.textButton}>More Detail</Text>
      </TouchableOpacity>
    </CardSection> 
  )};
}

const styles = StyleSheet.create({
    container: {
      flex: 1,              
    },
    row: {
      flex: 1,
      height: 400,
      padding: 5,
      margin: 5,
      marginBottom: 10,
      borderRadius: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f1f1f1',
      backgroundColor: '#fff',      
      elevation: 3
    },
    title: {
      fontSize: 18,
      color: '#000',
      alignSelf: 'center',
      marginBottom: 15,
      marginTop: 5,
    },
    images: {
      height: 200,      
    },    
    description: {
      fontSize: 16,      
      marginRight: 8,
      marginLeft: 8,
      color: '#0e110e'
    },
    button: {
      height: 30,
      width: 100,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      borderWidth: 1,
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 5
    },
    textButton: {
      color: '#fff'
    },
    descriptionTitle: {
      fontSize: 16,
      color: '#0e110e',      
      marginBottom: 8,
      marginLeft: 8
    },
    column: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      marginRight: 5,
      marginTop: 5,
      marginBottom: 5
    },
    icon: {
      width: 25,
      height: 25,
      margin: 5,      
    }    
})