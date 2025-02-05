import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';
import { navigationRef } from './RootNavigation';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
