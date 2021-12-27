import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
export function Product({name, price, image, onPress}) {
    return (
        <TouchableOpacity style={StyleSheet.card} onPress={onPress}>
            <Image style={StyleSheet.thumb} source={image} />
            <View style={StyleSheet.infoContainer}>
                <Text style={StyleSheet.name}>{name}</Text>
                <Text style={StyleSheet.price}>$ {price}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#dddddd',
        borderRadius: 20,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 18,
    },
    thumb: {
        height: 280,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        width: '100%',
    },
    infoContainer: {
        padding: 25,
    },
    name: {
        fontSize: 21,
        fontWeight: 'normal',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});