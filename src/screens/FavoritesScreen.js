import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoCard from '../components/InfoCard';
import ScreenLayout from '../components/ScreenLayout';

const tips = [
  {
    icon: '🎯',
    title: 'Entrena con categorías',
    description: 'Juega rondas solo de poesía, ciencia o literatura latinoamericana.',
  },
  {
    icon: '⏱️',
    title: 'Practica en 3 minutos',
    description: 'Inicia un sprint corto con 5 frases para calentar la memoria.',
  },
  {
    icon: '🤝',
    title: 'Reta a tus amigos',
    description: 'Comparte tu código de sala para competir por la mejor racha.',
  },
];

export default function FavoritesScreen() {
  return (
    <ScreenLayout
      title="Colección"
      description="Agrupa tus frases favoritas y crea playlists de autores."
    >
      <View style={styles.emptyState}>
        <Text style={styles.emptyIcon}>📚</Text>
        <Text style={styles.emptyTitle}>Aún no guardas frases</Text>
        <Text style={styles.emptyDescription}>Curar tu biblioteca mejora tus sugerencias en las rondas.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Consejos para empezar</Text>
        <View style={styles.cardStack}>
          {tips.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  emptyState: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  emptyIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  emptyDescription: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 20,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },
  cardStack: {
    gap: 10,
  },
});
