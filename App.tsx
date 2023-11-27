import 'react-native-gesture-handler'; // Additional configuration required by react-native-gesture-handler.
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colours} from './src/styles';
import RootNavigator from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor={Colours.primary}
      />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colours?.background,
  },
});

export default App;
