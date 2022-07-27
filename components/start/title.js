import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Title({ navigation }) {
    return (
        <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={() => navigation.navigate('Game')}>
            <Text style={{
                color: 'white',
                fontSize: 30,
                alignSelf: 'center',
                top: 150,
                borderRadius: 30,
                shadowColor: 'white',
                shadowOpacity: 0.8,
                shadowRadius: 16,
                elevation: 30,
                opacity: 0.9
            }}>Press Anywhere To Start!</Text>
            <View style={{
                alignSelf: 'center',
                top: 200,
            }}>
                <Text style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: 'grey',
                    fontSize: 18,
                    opacity: 0.7,
                }}>How to play:</Text>
                <Text style={{
                    color: 'grey',
                    fontSize: 17,
                    opacity: 0.7,
                }} >1. Memorize the order of the numbers</Text>
                <Text style={{
                    color: 'grey',
                    fontSize: 17,
                    opacity: 0.7,
                }} >2. Press the circles by the giving order</Text>

            </View>
        </TouchableOpacity>
    );
};