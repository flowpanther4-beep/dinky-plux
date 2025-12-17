import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { quotes, getRandomQuote } from '../data/quotes';

const gradientColors = ['#111827', '#0b1224'];

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
        <View style={styles.hero}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>Nuevo</Text>
            <Text style={styles.heroBadgeLabel}>Juego de frases</Text>
          </View>
          <Text style={styles.heroTitle}>Adivina quién dijo la frase</Text>
          <Text style={styles.heroSubtitle}>
            Lee la cita, escoge entre tres voces y desbloquea rachas de conocimiento literario.
          </Text>
          <View style={styles.heroActions}>
            <TouchableOpacity style={styles.primaryButton} onPress={handlePlay}>
              <Text style={styles.primaryText}>Empezar partida</Text>
              <Ionicons name="play" size={18} color="#0b1224" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={handleShuffle}>
              <Ionicons name="refresh" size={18} color="#e5e7eb" />
              <Text style={styles.secondaryText}>Ver otra frase</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardLabel}>Destello de inspiración</Text>
            <Ionicons name="bulb" size={18} color="#fbbf24" />
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
          <Text style={styles.sectionTitle}>Cómo se juega</Text>
          <View style={styles.stepsGrid}>
            <StepCard
              icon="chatbubble-ellipses"
              title="Lee la frase"
              description="Recibe citas icónicas con contexto mínimo."
            />
            <StepCard
              icon="options"
              title="Elige la voz"
              description="Selecciona entre tres autores posibles."
            />
            <StepCard
              icon="ribbon"
              title="Gana la ronda"
              description="Suma puntos, crea rachas y comparte tu marcador."
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Colecciones rápidas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.deckRow}>
            {['Autores latinoamericanos', 'Ciencia y cosmos', 'Frases inspiradoras', 'Poetas rebeldes'].map((label) => (
              <View key={label} style={styles.deckCard}>
                <Text style={styles.deckTitle}>{label}</Text>
                <Text style={styles.deckSubtitle}>10 rondas curadas</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimas puntuaciones</Text>
          <View style={styles.scoreList}>
            {[{ name: 'Ana', score: 180 }, { name: 'Luis', score: 150 }, { name: 'Camila', score: 140 }].map((item) => (
              <View key={item.name} style={styles.scoreItem}>
                <Text style={styles.scoreName}>{item.name}</Text>
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
    gap: 16,
    backgroundColor: gradientColors[1],
  },
  hero: {
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#1f2937',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  heroBadgeText: {
    color: '#9ca3af',
    fontSize: 12,
    fontWeight: '700',
  },
  heroBadgeLabel: {
    color: '#e5e7eb',
    fontSize: 13,
  },
  heroTitle: {
    color: '#f9fafb',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 32,
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
    borderColor: 'rgba(255,255,255,0.15)',
  },
  secondaryText: {
    color: '#e5e7eb',
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#0b1224',
    borderRadius: 18,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: '#cbd5e1',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  quoteText: {
    color: '#f8fafc',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700',
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
    paddingHorizontal: 10,
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
    width: 32,
    height: 32,
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
    gap: 10,
  },
  deckCard: {
    width: 200,
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 16,
    gap: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
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
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  scoreName: {
    color: '#e5e7eb',
    fontWeight: '700',
  },
  scoreValue: {
    color: '#fbbf24',
    fontWeight: '800',
  },
});
