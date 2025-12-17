import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ACCENT = '#f5c518';

export default function HomeHeader({ searchQuery, onSearchChange }) {
  const handleNotifications = () => {
    Alert.alert('Notificaciones', 'Pronto podrás gestionar tus alertas personalizadas.');
  };

  const handleSettings = () => {
    Alert.alert('Ajustes', 'Configura tus fuentes y frecuencia de actualizaciones.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.greeting}>Hola, analista</Text>
          <Text style={styles.subtitle}>Dashboard político en vivo</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton} onPress={handleNotifications}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleSettings}>
            <Text style={styles.iconText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.input}
          placeholder="Buscar noticias, pactos, actores..."
          placeholderTextColor="#8a8f9f"
          value={searchQuery}
          onChangeText={onSearchChange}
          selectionColor={ACCENT}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 18,
    backgroundColor: '#0b0d14',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  greeting: {
    color: '#f2f4f7',
    fontSize: 22,
    fontWeight: '800',
  },
  subtitle: {
    color: '#aeb6c8',
    fontSize: 14,
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#151824',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(245,197,24,0.25)',
  },
  iconText: {
    fontSize: 18,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f1220',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(245,197,24,0.15)',
    gap: 8,
  },
  searchIcon: {
    fontSize: 16,
    color: '#c7ccd8',
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
  },
});
