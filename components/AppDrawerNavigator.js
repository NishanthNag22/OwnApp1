import React from 'react';
import { Icon } from 'react-native-elements'
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import MyProductsScreen from '../screens/MyProductsScreen';
import BuyAgainScreen from '../screens/BuyAgainScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import DetailsScreen from '../screens/DetailsScreen';

export const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: "Home",
                drawerIcon:
                    < Icon
                        name="home"
                        type="font-awesome"
                    />
            },
        },
        MyCart: {
            screen: CartScreen,
            navigationOptions: {
                drawerLabel: "Your Cart",
                drawerIcon:
                    < Icon
                        name="shoppingcart"
                        type="antdesign"
                    />
            }
        },
        MyOrders: {
            screen: MyOrdersScreen,
            navigationOptions: {
                drawerLabel: "Your Orders"
            }
        },
        BuyAgain: {
            screen: BuyAgainScreen,
            navigationOptions: {
                drawerLabel: "Buy Again"
            }
        },
        Details: {
            screen: DetailsScreen,
        },
        MyProducts: {
            screen: MyProductsScreen,
            navigationOptions: {
                drawerLabel: "Sell On "
            }
        },
        Notifications: {
            screen: NotificationScreen,
            navigationOptions: {
                drawerLabel: "Your Notifications",
                drawerIcon:
                    < Icon
                        name="bell"
                        type="font-awesome"
                    />

            },
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                drawerLabel: "Your account",
                drawerIcon:
                    < Icon
                        name="gear"
                        type="font-awesome"
                    />
            },
        },
    },
    {
        contentComponent: CustomSideBarMenu,
    },
    {
        initialRouteName: 'Home',
    }
);