import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favoritos</Text>
      <Text style={styles.body}>Aquí podrás guardar y consultar tus elementos favoritos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fdf6e3',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5c5c5c',
  },
});
