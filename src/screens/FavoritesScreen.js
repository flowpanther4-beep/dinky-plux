import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoCard from '../components/InfoCard';
import ScreenLayout from '../components/ScreenLayout';

const tips = [
  {
    icon: '🔖',
    title: 'Organiza con etiquetas',
    description: 'Agrupa tus favoritos por tema para encontrarlos al instante.',
  },
  {
    icon: '⏰',
    title: 'Recuerda revisarlos',
    description: 'Activa recordatorios semanales para mantenerlos actualizados.',
  },
  {
    icon: '🤝',
    title: 'Comparte lo mejor',
    description: 'Envía tus selecciones destacadas a tus contactos en un toque.',
  },
];

export default function FavoritesScreen() {
  return (
    <ScreenLayout
      title="Favoritos"
      description="Guarda aquí lo que más usas y accede de forma organizada."
    >
      <View style={styles.emptyState}>
        <Text style={styles.emptyIcon}>📂</Text>
        <Text style={styles.emptyTitle}>Aún no tienes favoritos</Text>
        <Text style={styles.emptyDescription}>
          Añade elementos desde cualquier pantalla para verlos agrupados aquí.
        </Text>
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
