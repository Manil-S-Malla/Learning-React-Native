import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Images} from '../../res';
import {Colours} from '../../styles';

const Splash = () => {
  return (
    <View style={styles.root}>
      <Image source={Images.logo} style={styles.logo} />
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
  logo: {
    width: '60%',
    aspectRatio: 1,
  },
});

export default Splash;
