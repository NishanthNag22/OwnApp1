import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import MyHeader from '../components/MyHeader.js';
import firebase from 'firebase';
import db from '../config.js';

export default class MyOrdersScreen extends Component {
    static navigationOptions = { header: null };

    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            allOrders: [],
        };
        this.requestRef = null;
    }

    getAllOrders = () => {
        this.requestRef = db
            .collection('allOrders')
            .where('donorId', '==', this.state.userId)
            .onSnapshot((snapshot) => {
                var allOrders = snapshot.docs.map((document) => document.data());
                this.setState({
                    allOrders: allOrders,
                });
            });
    };

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, i }) => (
        <ListItem
            key={i}
            title={item.itemName}
            subtitle={
                'Requested By : ' +
                item.requestedBy +
                '\nStatus : ' +
                item.requestStatus
            }
            leftElement={<Icon name="item" type="font-awesome" color="#696969" />}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#ffff' }}>Exchange</Text>
                </TouchableOpacity>
            }
            bottomDivider
        />
    );

    componentDidMount() {
        this.getAllOrders();
    }

    componentWillUnmount() {
        this.requestRef();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader navigation={this.props.navigation} title="My Orders" />
                <View style={{ flex: 1 }}>
                    {this.state.allOrders.length === 0 ? (
                        <View style={styles.subtitle}>
                            <Text style={{ fontSize: 20 }}>List Of All Orders</Text>
                        </View>
                    ) : (
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.allOrders}
                            renderItem={this.renderItem}
                        />
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff5722',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        elevation: 16,
    },
    subtitle: {
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});