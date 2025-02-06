import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Activity2 = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text style={styles.name}>
      <Text style={styles.boldText}>Kian</Text>
      <Text style={styles.italicText}>Bautista</Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  name: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,

  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: "italic",
  },

});

export default Activity2;