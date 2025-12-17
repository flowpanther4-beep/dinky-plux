import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoCard from '../components/InfoCard';
import ScreenLayout from '../components/ScreenLayout';

const actions = [
  {
    icon: '⚡',
    title: 'Racha máxima',
    description: 'Mantén vivo tu mejor récord jugando rondas diarias.',
  },
  {
    icon: '🧠',
    title: 'Temas favoritos',
    description: 'Personaliza qué autores y épocas quieres ver más seguido.',
  },
  {
    icon: '🏆',
    title: 'Logros',
    description: 'Desbloquea medallas por acertar citas difíciles y compartirlas.',
  },
];

export default function ProfileScreen() {
  return (
    <ScreenLayout
      title="Perfil"
      description="Revisa tu progreso y ajusta el modo de juego a tu estilo."
      headerRight={<View style={styles.initialsBadge}><Text style={styles.initials}>JG</Text></View>}
    >
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Puntaje semanal</Text>
        <Text style={styles.summaryTitle}>780 pts</Text>
        <Text style={styles.summaryDescription}>
          Sube 20 puestos más y desbloquea el reto "Frases del mundo" de fin de semana.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gestión rápida</Text>
        <View style={styles.cardStack}>
          {actions.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  initialsBadge: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#ede9fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: '#4338ca',
    fontWeight: '700',
    fontSize: 16,
  },
  summaryCard: {
    backgroundColor: '#e0f2fe',
    borderRadius: 16,
    padding: 18,
    gap: 6,
  },
  summaryLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0369a1',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
  },
  summaryDescription: {
    fontSize: 14,
    color: '#0f172a',
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
