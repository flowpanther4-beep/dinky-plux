import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
      <Text style={styles.body}>Bienvenido a la pantalla principal de la app.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#f6f7fb',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4a4a4a',
  },
});
