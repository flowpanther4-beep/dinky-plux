import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InfoCard from '../components/InfoCard';
import ScreenLayout from '../components/ScreenLayout';

const quickActions = [
  {
    icon: '✨',
    title: 'Explora novedades',
    description: 'Descubre las últimas funcionalidades que hemos añadido para ti.',
    tag: 'Nuevo',
  },
  {
    icon: '🚀',
    title: 'Accesos rápidos',
    description: 'Crea atajos para tus tareas favoritas y accede en segundos.',
  },
  {
    icon: '📝',
    title: 'Notas inteligentes',
    description: 'Organiza tus ideas con etiquetas y recordatorios personalizados.',
  },
];

const highlights = [
  {
    icon: '📅',
    title: 'Agenda del día',
    description: 'Revisa tus próximos eventos y reuniones programadas.',
  },
  {
    icon: '💡',
    title: 'Tips personalizados',
    description: 'Recibe sugerencias adaptadas a tu actividad reciente.',
  },
];

export default function HomeScreen() {
  return (
    <ScreenLayout
      title="Inicio"
      description="Mantente al día con las herramientas y recomendaciones más útiles."
      headerRight={<View style={styles.badge}><Text style={styles.badgeText}>Activo</Text></View>}
    >
      <StatusBar style="dark" />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tu panel</Text>
        <View style={styles.cardStack}>
          {quickActions.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumen de hoy</Text>
        <View style={styles.cardStack}>
          {highlights.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#d1fae5',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {
    color: '#065f46',
    fontWeight: '600',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  cardStack: {
    gap: 10,
  },
});
