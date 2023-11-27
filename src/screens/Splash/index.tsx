import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Images} from '../../res';
import {Colours} from '../../styles';

interface SplashProps {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
}

const Splash: React.FC<SplashProps> = ({navigation}) => {
  useEffect(() => {
    const timeoutNavHome = setTimeout(() => {
      navigation.navigate('Home');
    }, 1500);

    return () => {
      clearTimeout(timeoutNavHome);
      console.log('Timeout to navigate to Home screen cleared.');
    };
  }, []);

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
