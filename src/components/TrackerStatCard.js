import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ACCENT = '#f5c518';

const formatDate = (value) => {
  try {
    const date = new Date(value);
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  } catch (error) {
    return '';
  }
};

export default function TrackerStatCard({ stat }) {
  if (!stat) return null;

  const handlePress = () => {
    Alert.alert('Mandate Tracker', 'Ruta de detalle no configurada.');
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>{stat.label}</Text>
        <Text style={styles.delta}>{stat.deltaText}</Text>
      </View>
      <Text style={styles.value}>{stat.value}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>Fuente: {stat.source}</Text>
        <Text style={styles.metaText}>Actualizado: {formatDate(stat.updatedAt)}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0f1220',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(245,197,24,0.15)',
    gap: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#e9ecf5',
    fontSize: 15,
    fontWeight: '800',
  },
  delta: {
    color: ACCENT,
    fontSize: 12,
    fontWeight: '700',
  },
  value: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  metaText: {
    color: '#9aa3b9',
    fontSize: 12,
    flex: 1,
  },
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: 'rgba(245,197,24,0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(245,197,24,0.4)',
  },
  buttonText: {
    color: ACCENT,
    fontWeight: '800',
    fontSize: 13,
  },
});
