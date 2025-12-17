import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoCard from '../components/InfoCard';
import ScreenLayout from '../components/ScreenLayout';

const actions = [
  {
    icon: '🛡️',
    title: 'Seguridad',
    description: 'Actualiza tu contraseña y revisa los dispositivos conectados.',
  },
  {
    icon: '⚙️',
    title: 'Preferencias',
    description: 'Configura notificaciones, idioma y accesibilidad.',
  },
  {
    icon: '🧾',
    title: 'Historial',
    description: 'Consulta tu actividad reciente y descargas realizadas.',
  },
];

export default function ProfileScreen() {
  return (
    <ScreenLayout
      title="Perfil"
      description="Administra tu cuenta, preferencias y datos personales."
      headerRight={<View style={styles.initialsBadge}><Text style={styles.initials}>AC</Text></View>}
    >
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Plan</Text>
        <Text style={styles.summaryTitle}>Cuenta Pro</Text>
        <Text style={styles.summaryDescription}>
          Accede a funciones avanzadas, soporte prioritario y sincronización ilimitada.
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
