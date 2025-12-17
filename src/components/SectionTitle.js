import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SectionTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  text: {
    color: '#e5e7eb',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
