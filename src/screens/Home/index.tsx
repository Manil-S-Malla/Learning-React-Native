import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colours} from '../../styles';

const Splash = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colours?.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: Colours.primary,
  },
});

export default Splash;
