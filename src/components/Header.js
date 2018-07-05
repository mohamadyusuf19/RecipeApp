import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.header}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#090109",
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
        color: '#fff'
    }
})

export default Header;