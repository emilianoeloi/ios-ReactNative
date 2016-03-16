import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerText: {
    alignItems: 'center',
  },
  txtDefault: {
    marginTop: 80,
    color: '#888888',
  }
});

class Main extends Component{
  render(){
    return(
      <View style={[styles.container, styles.centerText]}>
        <Text style={styles.txtDefault}> Aí Sávio </Text>
      </View>
    )
  }
};

module.exports = Main;
