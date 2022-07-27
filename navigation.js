import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, } from '@react-navigation/native';
import React from 'react';
import Game from './screens/game';
import Start from './screens/start';


export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Start' screenOptions={screenOptions}>
                <Stack.Screen name='Start' component={Start} />
                <Stack.Screen name='Game' component={Game} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};