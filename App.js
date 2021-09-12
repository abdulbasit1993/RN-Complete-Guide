/*
YouTube Tutorial Link: https://www.youtube.com/watch?v=qSRrxpdMpVc
Watched until 4:54:00
*/

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
