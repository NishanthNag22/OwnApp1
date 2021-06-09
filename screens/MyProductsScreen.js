import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';
import MyHeader from '../components/MyHeader.js';
import firebase from 'firebase';
import db from '../config.js';

export default class MyProductsScreen extends Component {
    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            productName: '',
            docId: '',
            productValue: '',
            productQuantity: ''
        }
    }

    addProduct = (productName) => {
        var userId = this.state.userId;
        db.collection('items').add({
            emailId: userId,
            itemName: productName,
            Cost: this.state.productValue,
            Quantity: this.state.productQuantity,
        });
        this.setState({
            productName: '',
            productValue: '',
            productQuantity: ''
        });
        return alert('Product Added Successfully', '', [
            {
                text: 'OK',
                onPress: () => {
                    this.props.navigation.navigate('Home');
                },
            },
        ]);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader title="Add Products" navigation={this.props.navigation} />
                <KeyboardAvoidingView
                    style={{ flex: 1, alignItems: "center" }}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder={'Product Name'}
                        onChangeText={(text) => {
                            this.setState({
                                productName: text,
                            });
                        }}
                        value={this.state.productName}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder={'Product Quantity'}
                        onChangeText={(text) => {
                            this.setState({
                                productQuantity: text,
                            });
                        }}
                        value={this.state.productQuantity}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder={'Product Value'}
                        onChangeText={(text) => {
                            this.setState({
                                productValue: text,
                            });
                        }}
                        value={this.state.productValue}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.addProduct(this.state.productName);
                        }}>
                        <Text
                            style={{ color: '#ffff', fontSize: 18, fontWeight: 'bold' }}>
                            Add Product
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formTextInput: {
        width: '60%',
        height: 45,
        marginTop: 30,
        borderWidth: 2,
        marginTop: 20,
        padding: 10
    },
    button: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff5722',
        marginTop: 30,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'black'
    }
})