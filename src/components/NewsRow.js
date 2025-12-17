import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ACCENT = '#f5c518';

const formatTime = (value) => {
  try {
    const date = new Date(value);
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  } catch (error) {
    return '';
  }
};

export default function NewsRow({ item }) {
  if (!item) return null;

  const handlePress = () => {
    Alert.alert('Leer noticia', 'Navegación al detalle estará disponible pronto.');
  };

  return (
    <TouchableOpacity style={styles.row} onPress={handlePress} activeOpacity={0.85}>
      <View style={styles.texts}>
        <View style={styles.categoryPill}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{item.source}</Text>
          <View style={styles.dot} />
          <Text style={styles.meta}>{formatTime(item.publishedAt)}</Text>
        </View>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f1220',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(245,197,24,0.1)',
    gap: 12,
  },
  texts: {
    flex: 1,
    gap: 6,
  },
  categoryPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: 'rgba(245,197,24,0.12)',
  },
  categoryText: {
    color: ACCENT,
    fontSize: 12,
    fontWeight: '800',
  },
  title: {
    color: '#f2f4f7',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  meta: {
    color: '#9aa3b9',
    fontSize: 12,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#9aa3b9',
  },
  chevron: {
    color: ACCENT,
    fontSize: 22,
    fontWeight: '900',
  },
});
