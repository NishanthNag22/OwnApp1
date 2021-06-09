import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import CartScreen from '../screens/CartScreen';
import DetailsScreen from '../screens/DetailsScreen';

export const AppStackNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
        Notification: {
            screen: NotificationScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
        Cart: {
            screen: CartScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                headerShown: false
            }
        }
    },

    {
        initialRouteName: 'Home',
    }
);