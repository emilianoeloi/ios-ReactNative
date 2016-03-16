/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';
import Main from './App/Components/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

class VaiSabrina extends Component {
  render() {
    // var name = "Sabrina";
    // debugger;
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Main,
          title: 'Vai Sabrina',
          passProps: { appName: 'VaiSabrina'}
        }} />
    );
  }
}

AppRegistry.registerComponent('VaiSabrina', () => VaiSabrina);
