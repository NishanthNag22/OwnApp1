import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { AppStackNavigator } from './components/AppStackNavigator';

export default function App() {
    return (
        <AppConatiner />
    )
}

const switchNavigator = createSwitchNavigator({
    WelcomeScreen: { screen: WelcomeScreen },
    Drawer: { screen: AppDrawerNavigator },
    AppStack: { screen: AppStackNavigator }
})

const AppConatiner = createAppContainer(switchNavigator)