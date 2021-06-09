import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      itemName: '',
      orderId: '',
      itemStatus: '',
      docId: '',
      isItemRequestActive: '',
      Quantity: '',
      Cost: '',
      allItems: [],
    };
    this.itemsRef = null;
  }

  getAllItems = () => {
    this.itemsRef = db.collection("items")
      .onSnapshot((snapshot) => {
        var allItems = snapshot.docs.map(document => document.data());
        this.setState({
          allItems: allItems
        });
      })
  }

  componentDidMount() {
    this.getAllItems()
  }

  componentWillUnmount() {
    this.itemsRef;
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.itemName}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        onPress={() => {
          this.props.navigation.navigate("Details", { "details": item })
        }}
        bottomDivider
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="Add Item" navigation={this.props.navigation} />
        <View>
          <SearchBar
            style={styles.searchBar}
            placeholder="Search"
            lightTheme={true}
            onChangeText={(text) => {
              this.setState({
                itemName: text,
              });
            }}
            value={this.state.itemName}
          />
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.allItems}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E8EE',
  },
  searchBar: {
    width: 150,
    height: 50,
    padding: 100,
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    }
  }
});