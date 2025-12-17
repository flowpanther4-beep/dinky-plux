import React from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ACCENT = '#f5c518';

const formatTime = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  } catch (error) {
    return '';
  }
};

export default function TopStoryHero({ story }) {
  if (!story) return null;

  const handleRead = () => Alert.alert('Leer nota', 'Navegación al detalle próximamente.');
  const handleSave = () => Alert.alert('Guardar', 'Sección de guardados aún no disponible.');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: story.image }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <View style={styles.metaRow}>
            <View style={styles.categoryPill}>
              <Text style={styles.categoryText}>{story.category}</Text>
            </View>
            {story.isBreaking && (
              <View style={styles.breakingPill}>
                <Text style={styles.breakingText}>Breaking</Text>
              </View>
            )}
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{story.title}</Text>
            <Text style={styles.summary}>{story.summary}</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.primaryButton} onPress={handleRead}>
                <Text style={styles.primaryText}>Leer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton} onPress={handleSave}>
                <Text style={styles.secondaryText}>Guardar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>{story.source}</Text>
              <View style={styles.dot} />
              <Text style={styles.footerText}>{formatTime(story.publishedAt)}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: '#0f0f14',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
    marginHorizontal: 20,
  },
  image: {
    height: 280,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingHorizontal: 18,
    paddingBottom: 22,
    paddingTop: 18,
    gap: 12,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  categoryPill: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  categoryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.3,
  },
  breakingPill: {
    backgroundColor: ACCENT,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  breakingText: {
    color: '#2a1b00',
    fontWeight: '800',
    fontSize: 12,
  },
  content: {
    gap: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 0.2,
  },
  summary: {
    color: '#d8dbe7',
    fontSize: 14,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 4,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: ACCENT,
    borderRadius: 14,
    alignItems: 'center',
    paddingVertical: 10,
    shadowColor: ACCENT,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  primaryText: {
    color: '#2a1b00',
    fontWeight: '800',
    fontSize: 15,
  },
  secondaryButton: {
    width: 110,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 14,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  secondaryText: {
    color: '#f2f4f7',
    fontWeight: '700',
    fontSize: 14,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  footerText: {
    color: '#cdd2e1',
    fontSize: 12,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#cdd2e1',
  },
});
