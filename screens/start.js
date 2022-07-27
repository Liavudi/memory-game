import { SafeAreaView, StatusBar } from 'react-native';
import androidSafeArea from '../components/android-safe-area';
import React from 'react';
import Title from '../components/start/title';


export default function Start({ navigation }) {
    return (
        <SafeAreaView style={androidSafeArea.AndroidSafeArea}>
            <StatusBar hidden={true} />
            <Title navigation={navigation} />
        </SafeAreaView>
    );
};