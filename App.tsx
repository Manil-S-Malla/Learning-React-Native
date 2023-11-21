import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const repositoryURL = 'https://github.com/Manil-S-Malla/Learning-React-Native';
const developerEmail = 'manilsmalla@gmail.com';

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={[
            styles.containerBody,
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            },
          ]}>
          <Section title="Learning React Native">
            This is an app which contains code I wrote while{' '}
            <Text style={styles.highlight}>Learning React Native</Text>.{'\n'}
            It is comprised of various different apps that highlight various
            different aspects of working wiith React Native.
          </Section>
          <Section title="Different Aspects">
            Different branches of the repository containing this app highlight
            different aspects of working with React Native. They may even
            contain entirely different apps.
          </Section>
          <Section title="Project Repository">
            You can checkout the repository for this project at{' '}
            <Text
              style={styles.hyperlink}
              onPress={() => {
                Linking.openURL(repositoryURL);
              }}>
              {repositoryURL}
            </Text>
            .
          </Section>
          <Section title="Find me at">
            You can find me at {'\n'}
            <Text
              style={styles.hyperlink}
              onPress={() => {
                Linking.openURL(developerEmail);
              }}>
              {developerEmail}
            </Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  containerBody: {
    paddingBottom: 30,
  },
  highlight: {
    fontWeight: '700',
  },
  hyperlink: {
    color: '#0070E0',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});

export default App;
