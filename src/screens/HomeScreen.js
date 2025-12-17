import React, { useMemo, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { quotes, getRandomQuote } from '../data/quotes';

const gradientColors = ['#0b1224', '#050915'];

export default function HomeScreen({ navigation }) {
  const [highlightId, setHighlightId] = useState(quotes[0].id);

  const highlightQuote = useMemo(() => getRandomQuote(highlightId), [highlightId]);

  const handleShuffle = () => {
    setHighlightId(highlightQuote.id);
  };

  const handlePlay = () => {
    navigation.navigate('Jugar');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80' }}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay}>
            <View style={styles.heroBadge}>
              <Ionicons name="sparkles" size={16} color="#0f172a" />
              <Text style={styles.heroBadgeText}>Experiencia premium</Text>
            </View>
            <Text style={styles.heroTitle}>Adivina quién dijo la frase</Text>
            <Text style={styles.heroSubtitle}>
              Una sala de lectura moderna con desafíos diarios, colecciones temáticas y rachas épicas.
            </Text>
            <View style={styles.heroActions}>
              <TouchableOpacity style={styles.primaryButton} onPress={handlePlay}>
                <Ionicons name="play" size={18} color="#0b1224" />
                <Text style={styles.primaryText}>Empezar partida</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton} onPress={handleShuffle}>
                <Ionicons name="refresh" size={18} color="#e5e7eb" />
                <Text style={styles.secondaryText}>Inspirar otra frase</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.statRow}>
              {[{ label: 'Rachas activas', value: '12' }, { label: 'Citas curadas', value: '120+' }, { label: 'Retos diarios', value: 'Noche de sabios' }].map((item) => (
                <View key={item.label} style={styles.statBox}>
                  <Text style={styles.statValue}>{item.value}</Text>
                  <Text style={styles.statLabel}>{item.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardLabel}>Destello de inspiración</Text>
              <Text style={styles.cardSubtitle}>Curado por el algoritmo de voces</Text>
            </View>
            <TouchableOpacity style={styles.iconButton} onPress={handleShuffle}>
              <Ionicons name="shuffle" size={16} color="#0f172a" />
            </TouchableOpacity>
          </View>
          <Text style={styles.quoteText}>“{highlightQuote.text}”</Text>
          <Text style={styles.quoteHint}>{highlightQuote.hint}</Text>
          <View style={styles.metaRow}>
            <View style={styles.metaPill}>
              <Ionicons name="person" size={14} color="#0f172a" />
              <Text style={styles.metaText}>{highlightQuote.author}</Text>
            </View>
            <TouchableOpacity style={styles.metaLink} onPress={handlePlay}>
              <Text style={styles.metaLinkText}>Adivinar más</Text>
              <Ionicons name="arrow-forward" size={14} color="#3b82f6" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Blueprint de la experiencia</Text>
          <View style={styles.stepsGrid}>
            <StepCard
              icon="sparkles"
              title="Ritmo cinematográfico"
              description="Animaciones sutiles y música de fondo optimizada para que cada ronda se sienta única."
            />
            <StepCard
              icon="layers"
              title="Capas de contexto"
              description="Pistas visuales, palabras clave y un hilo narrativo que evoluciona con tu racha."
            />
            <StepCard
              icon="trophy"
              title="Logros de autor"
              description="Reúne medallas temáticas, comparte marcadores y desbloquea ediciones especiales."
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Colecciones rápidas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.deckRow}>
            {['Autores latinoamericanos', 'Ciencia y cosmos', 'Frases inspiradoras', 'Poetas rebeldes'].map((label, index) => (
              <View key={label} style={[styles.deckCard, index % 2 === 0 ? styles.deckCardGlow : null]}>
                <Text style={styles.deckTitle}>{label}</Text>
                <Text style={styles.deckSubtitle}>10 rondas curadas</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Panel en tiempo real</Text>
          <View style={styles.scoreList}>
            {[{ name: 'Ana', score: 180 }, { name: 'Luis', score: 150 }, { name: 'Camila', score: 140 }].map((item, index) => (
              <View key={item.name} style={[styles.scoreItem, index === 0 ? styles.scoreItemHighlight : null]}>
                <View>
                  <Text style={styles.scoreName}>{item.name}</Text>
                  <Text style={styles.scoreBadge}>Racha x{3 - index}</Text>
                </View>
                <Text style={styles.scoreValue}>{item.score} pts</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StepCard({ icon, title, description }) {
  return (
    <View style={styles.stepCard}>
      <View style={styles.stepIcon}>
        <Ionicons name={icon} size={18} color="#0f172a" />
      </View>
      <Text style={styles.stepTitle}>{title}</Text>
      <Text style={styles.stepDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: gradientColors[1],
  },
  scrollContent: {
    padding: 20,
    gap: 18,
    backgroundColor: gradientColors[1],
  },
  hero: {
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  heroImage: {
    borderRadius: 22,
    opacity: 0.6,
  },
  heroOverlay: {
    backgroundColor: 'rgba(5, 9, 21, 0.85)',
    padding: 20,
    gap: 12,
  },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#fbbf24',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  heroBadgeText: {
    color: '#0f172a',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: '#f9fafb',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 34,
  },
  heroSubtitle: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 22,
  },
  heroActions: {
    flexDirection: 'row',
    gap: 10,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fbbf24',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  primaryText: {
    color: '#0b1224',
    fontWeight: '800',
    fontSize: 15,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    backgroundColor: 'rgba(15, 23, 42, 0.7)',
  },
  secondaryText: {
    color: '#e5e7eb',
    fontWeight: '700',
  },
  statRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    gap: 4,
  },
  statValue: {
    color: '#f8fafc',
    fontWeight: '800',
    fontSize: 16,
  },
  statLabel: {
    color: '#cbd5e1',
    fontSize: 12,
    letterSpacing: 0.4,
  },
  card: {
    backgroundColor: '#0b1224',
    borderRadius: 18,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: '#cbd5e1',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  cardSubtitle: {
    color: '#94a3b8',
    fontSize: 12,
  },
  iconButton: {
    backgroundColor: '#fbbf24',
    padding: 10,
    borderRadius: 12,
  },
  quoteText: {
    color: '#f8fafc',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '800',
  },
  quoteHint: {
    color: '#94a3b8',
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fbbf24',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  metaText: {
    color: '#0f172a',
    fontWeight: '800',
  },
  metaLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaLinkText: {
    color: '#3b82f6',
    fontWeight: '700',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '800',
  },
  stepsGrid: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  stepCard: {
    flexBasis: '48%',
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  stepIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#fbbf24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTitle: {
    color: '#f8fafc',
    fontWeight: '800',
    fontSize: 16,
  },
  stepDescription: {
    color: '#cbd5e1',
    lineHeight: 20,
  },
  deckRow: {
    gap: 12,
  },
  deckCard: {
    width: 220,
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 16,
    gap: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  deckCardGlow: {
    borderColor: 'rgba(251, 191, 36, 0.4)',
    shadowColor: '#fbbf24',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  deckTitle: {
    color: '#f8fafc',
    fontWeight: '800',
    fontSize: 16,
  },
  deckSubtitle: {
    color: '#94a3b8',
  },
  scoreList: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  scoreItemHighlight: {
    borderBottomColor: 'rgba(251, 191, 36, 0.35)',
  },
  scoreName: {
    color: '#e5e7eb',
    fontWeight: '800',
  },
  scoreBadge: {
    color: '#94a3b8',
    fontSize: 12,
  },
  scoreValue: {
    color: '#fbbf24',
    fontWeight: '800',
  },
});
