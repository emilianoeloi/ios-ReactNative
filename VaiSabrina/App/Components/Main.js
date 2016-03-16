import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorISO
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48BBEC',
  },
  centerText: {
    alignItems: 'center',
  },
  txtDefault: {
    marginTop: 80,
    color: '#888888',
  },
  title: {
    marginTop: 80,
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      isLoading: false,
      error: false
    }
  }
  handlerChange(event){
    this.setState({
      username: event.nativeEvent.text
    });
  }
  handlerSubmit(event){
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true
    });
    console.info('handlerSubmit', this.state);
    // fetch data from github
    // reroute to the next passing that gitub information
  }
  render(){
    return(
      <View style={[styles.container, styles.centerText]}>
        <Text style={styles.title}> Github </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handlerChange.bind(this)} />
        <TouchableHighlight
            style={styles.button}
            onPress={this.handlerSubmit.bind(this)}
            underlayColor="white">
            <Text style={styles.butonText}>
              Search
            </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Main;
