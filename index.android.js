/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greet}>
          Welcome to React Native!
        </Text>
        <Text style={styles.procedure}>
          Come on!Start your first code.
        </Text>
        <Text style={styles.procedure}>
          Develop your Virtual Reality in application.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  greet: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  procedure: {
    textAlign: 'center',
    color: '#66666',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
