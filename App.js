import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      dataSource: []
    }
  }

  renderItem = ({item}) => {
    return(
      <View style={{flex: 1 , flexDirection: 'row', margin: '20%'}}> 
      <Text>
        {item.name.title}
      </Text>
      <Text>
        {item.name.first}
      </Text>
      <Text>
        {item.name.last}
      </Text>
    </View>
    )
  }
  
  componentDidMount() {
    const url = "https://randomuser.me/api/?results=100&inc=name";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.results
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  render() {
    return (
    <View style={styles.container}>
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
