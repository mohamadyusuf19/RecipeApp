import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import Recipe from '../screen/Recipe';
import Profile from '../screen/Profile';
import Favorite from '../screen/Favorite';
import Bookmark from '../screen/Bookmark';
import DetailMasakan from '../screen/DetailMasakan';
import Add from '../screen/Add';

const recipeIcon = require('../assets/recipe.png')
const favoriteIcon = require('../assets/favorite.png')
const profileIcon = require('../assets/user.png')
const bookmarkIcon = require('../assets/agenda.png')
const addIcon = require('../assets/plus.png')

const Routes = createBottomTabNavigator({
    Recipe: {
        screen: Recipe,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={recipeIcon}
                    style={[styles.icon, { tintColor }]}
                />                
            )
        }
    },
    Bookmark: {
        screen: Bookmark,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={bookmarkIcon}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    Add: {
        screen: Add,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={addIcon}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={favoriteIcon}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    Profil: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={profileIcon}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#717f78',
        inactiveTintColor: '#000',
        indicatorStyle: { backgroundColor: '#000' },
        labelStyle: {
            fontSize: 14,
        },
        style: {
            backgroundColor: '#fff',
            height: 60
        }
    }
});

const Navigator = createStackNavigator({
    Home : {
        screen: Routes,
        navigationOptions: {
            header: null
        }
    },
    DetailMasakan: {
        screen: DetailMasakan,
        navigationOptions: {
            header: null
        }
    }
}, {
    transitionConfig: getSlideFromRightTransition
})

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20
    }
})

export default Navigator;