import { View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';


export default function Heart() {
  return (
    <View>
      <LottieView style={{ height: 200, alignSelf: 'center', height: 40 }}
        source={require('../../assets/animations/beating-heart.json')}
        autoPlay
        speed={3} />
    </View>
  );
};