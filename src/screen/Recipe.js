import React, { Component } from 'react';
import {  View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Data from '../config/recipe.json';

const bookmarkIcon = require('../assets/bookmark.png')
const favoriteIcon = require('../assets/like.png')
const commentIcon = require('../assets/speech-bubble.png')

export default class Recipe extends Component {
  state = {
    liked: false,
  };
  
  _onPressBtn() {
    this.setState({
      liked: !this.state.liked,
    });
  }

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

  likedStyles() {
    if(!this.state.liked) {
      return (
        styles.liked
      )
    }
    return (styles.icon)
  }
  
  _renderItem = ({item}) => {    
    console.log(item.ingredients)
    return (
    <View style={styles.row}>
      <Text style={styles.title}>{item.name}</Text>
      <Image source={{ uri:item.imageURL }} style={styles.images} />
      <View style={styles.column}>
        <TouchableOpacity>
          <Image source={bookmarkIcon} style={styles.bookmark}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this._onPressBtn()}          
          underlayColor="#fefefe"        
        >
          <Image source={favoriteIcon} style={this.likedStyles()} key={item.name}/>      
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={commentIcon} style={styles.bookmark}/>        
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
    </View>
  )};

  render() {
    console.log(Data)
    return (
      <View style={styles.container}>
        <Header
          header="RECIPES"
        />
        <FlatList
          data={Data}            
          keyExtractor={(x, i) => i.toString()}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,              
    },
    row: {
      flex: 1,
      height: 450,
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
    bookmark: {
      height: 25,
      width: 25,     
      margin: 5,
      tintColor: '#717f78' 
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
      borderColor: '#717f78',
      borderWidth: 1,
      marginTop: 8,
      borderRadius: 5
    },
    textButton: {
      color: '#717f78'
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
      tintColor: '#717f78',
    },
    liked: {
      width: 25,
      height: 25,
      margin: 5,
      tintColor: '#e74c3c',
    },
})