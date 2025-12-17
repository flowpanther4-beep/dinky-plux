import React, { useMemo, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getRandomQuote } from '../data/quotes';

const COLORS = {
  background: '#0b1224',
  card: '#0f172a',
  accent: '#fbbf24',
  muted: '#94a3b8',
  text: '#e5e7eb',
};

const shuffle = (array) => array.slice().sort(() => Math.random() - 0.5);

const createRound = (previousId) => {
  const quote = getRandomQuote(previousId);
  return {
    quote,
    options: shuffle(quote.options),
  };
};

export default function PlayScreen() {
  const [round, setRound] = useState(() => createRound());
  const [selectedOption, setSelectedOption] = useState(null);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);

  const progress = useMemo(() => Math.min(((roundsPlayed % 8) + 1) / 8, 1), [roundsPlayed]);

  const sessionMood = useMemo(() => {
    if (streak >= 4) return { label: 'Modo leyenda', color: '#22c55e', icon: 'ribbon' };
    if (streak >= 2) return { label: 'Ritmo alto', color: '#fbbf24', icon: 'trending-up' };
    return { label: 'Calentando', color: '#38bdf8', icon: 'sparkles' };
  }, [streak]);

  const feedback = useMemo(() => {
    if (!selectedOption) return null;
    const correct = selectedOption === round.quote.author;
    return {
      correct,
      text: correct ? '¡Respuesta correcta!' : 'Ups, esa no era.',
    };
  }, [selectedOption, round.quote.author]);

  const handleSelect = (option) => {
    if (selectedOption) return;

    const correct = option === round.quote.author;
    setSelectedOption(option);
    setRoundsPlayed((prev) => prev + 1);

    if (correct) {
      setScore((prev) => prev + 50 + streak * 10);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    setRound(createRound(round.quote.id));
    setSelectedOption(null);
  };

  const handleReset = () => {
    setRound(createRound());
    setSelectedOption(null);
    setScore(0);
    setStreak(0);
    setRoundsPlayed(0);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.title}>Ronda relámpago</Text>
            <Text style={styles.subtitle}>Completa tantas frases como puedas.</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: sessionMood.color }]}>
            <Ionicons name={sessionMood.icon} size={16} color={COLORS.card} />
            <Text style={[styles.badgeText, { color: COLORS.card }]}>{sessionMood.label}</Text>
          </View>
        </View>

        <View style={styles.banner}>
          <View style={styles.bannerLeft}>
            <Ionicons name="planet" size={18} color={COLORS.card} />
            <View>
              <Text style={styles.bannerTitle}>Desafío de galaxias</Text>
              <Text style={styles.bannerSubtitle}>Frases viajeras con tres autores sorpresa.</Text>
            </View>
          </View>
          <View style={styles.progressWrapper}>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
            </View>
            <Text style={styles.progressLabel}>Próximo logro en {Math.max(1, Math.ceil((1 - progress) * 8))} frases</Text>
          </View>
        </View>

        <View style={styles.scoreBoard}>
          <ScoreStat label="Puntaje" value={`${score} pts`} icon="trophy" />
          <ScoreStat label="Rondas" value={`${roundsPlayed}`} icon="timer" />
          <ScoreStat label="Racha" value={`${streak} seg.`} icon="sparkles" />
        </View>

        <View style={styles.sessionGrid}>
          <View style={styles.sessionCard}>
            <Ionicons name="musical-notes" size={18} color={COLORS.card} />
            <View style={styles.sessionCopy}>
              <Text style={styles.sessionTitle}>Audio inmersivo</Text>
              <Text style={styles.sessionSubtitle}>Sugerimos reproducir con auriculares para sentir la sala de lectura.</Text>
            </View>
          </View>
          <View style={styles.sessionCard}>
            <Ionicons name="sparkles" size={18} color={COLORS.card} />
            <View style={styles.sessionCopy}>
              <Text style={styles.sessionTitle}>Rondas temáticas</Text>
              <Text style={styles.sessionSubtitle}>Cada 5 aciertos cambia la ambientación y la curaduría.</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardLabel}>Frase #{roundsPlayed + 1}</Text>
              <Text style={styles.cardLegend}>Curaduría dinámica · Inspiración veloz</Text>
            </View>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=200&q=80' }}
              style={styles.cardImage}
            />
          </View>
          <Text style={styles.quoteText}>“{round.quote.text}”</Text>
          <View style={styles.hintRow}>
            <Ionicons name="bulb" size={16} color={COLORS.accent} />
            <Text style={styles.hintText}>{round.quote.hint}</Text>
          </View>

          <View style={styles.optionsList}>
            {round.options.map((option, index) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === round.quote.author;
              const disabled = Boolean(selectedOption);
              const label = String.fromCharCode(65 + index);

              let optionStyle = styles.optionButton;
              if (selectedOption) {
                if (isCorrect) optionStyle = { ...optionStyle, ...styles.correct };
                else if (isSelected) optionStyle = { ...optionStyle, ...styles.incorrect };
              }

              return (
                <TouchableOpacity
                  key={option}
                  style={optionStyle}
                  onPress={() => handleSelect(option)}
                  disabled={disabled}
                  activeOpacity={0.9}
                >
                  <View style={styles.optionLeft}>
                    <View style={[styles.optionBadge, { backgroundColor: isCorrect ? '#16a34a' : 'rgba(255,255,255,0.07)' }]}>
                      <Text style={styles.optionBadgeText}>{label}</Text>
                    </View>
                    <Text style={styles.optionText}>{option}</Text>
                  </View>
                  {isSelected ? <Ionicons name="radio-button-on" size={16} color={COLORS.accent} /> : null}
                </TouchableOpacity>
              );
            })}
          </View>

          {feedback ? (
            <View style={[styles.feedback, feedback.correct ? styles.feedbackSuccess : styles.feedbackError]}>
              <Text style={styles.feedbackText}>{feedback.text}</Text>
              <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Siguiente</Text>
                <Ionicons name="arrow-forward" size={16} color="#0b1224" />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Ionicons name="refresh" size={16} color={COLORS.text} />
            <Text style={styles.resetText}>Reiniciar marcador</Text>
          </TouchableOpacity>
          <View style={styles.tipCard}>
            <View style={styles.tipIcon}>
              <Ionicons name="compass" size={18} color={COLORS.card} />
            </View>
            <View style={styles.tipCopy}>
              <Text style={styles.tipTitle}>Tip creativo</Text>
              <Text style={styles.tipSubtitle}>Cambia de ritmo: alterna autores clásicos y modernos para subir de rango.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.textButton} onPress={handleNext}>
            <Text style={styles.textButtonLabel}>Quiero otra frase</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ScoreStat({ label, value, icon }) {
  return (
    <View style={styles.statBox}>
      <View style={styles.statIcon}>
        <Ionicons name={icon} size={16} color={COLORS.card} />
      </View>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    padding: 20,
    gap: 14,
    backgroundColor: COLORS.background,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    color: COLORS.muted,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.accent,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  badgeText: {
    color: COLORS.card,
    fontWeight: '800',
  },
  banner: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    gap: 10,
  },
  bannerLeft: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#f8fafc',
    fontWeight: '800',
    fontSize: 16,
  },
  bannerSubtitle: {
    color: COLORS.muted,
  },
  progressWrapper: {
    gap: 6,
  },
  progressTrack: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.accent,
  },
  progressLabel: {
    color: COLORS.muted,
    fontSize: 12,
  },
  scoreBoard: {
    flexDirection: 'row',
    gap: 10,
  },
  sessionGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  sessionCard: {
    flex: 1,
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 12,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  sessionCopy: {
    gap: 4,
    flex: 1,
  },
  sessionTitle: {
    color: '#f8fafc',
    fontWeight: '800',
  },
  sessionSubtitle: {
    color: COLORS.muted,
    fontSize: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 12,
    gap: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  statIcon: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    color: COLORS.muted,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  statValue: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '800',
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 18,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: COLORS.muted,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardLegend: {
    color: COLORS.muted,
    fontSize: 12,
  },
  cardImage: {
    width: 56,
    height: 56,
    borderRadius: 14,
  },
  quoteText: {
    color: '#f8fafc',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '800',
  },
  hintRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  hintText: {
    color: COLORS.muted,
  },
  optionsList: {
    gap: 10,
  },
  optionButton: {
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionBadge: {
    width: 28,
    height: 28,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionBadgeText: {
    color: '#f8fafc',
    fontWeight: '800',
  },
  optionText: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 15,
  },
  correct: {
    borderColor: '#16a34a',
    backgroundColor: 'rgba(22, 163, 74, 0.08)',
  },
  incorrect: {
    borderColor: '#ef4444',
    backgroundColor: 'rgba(239, 68, 68, 0.08)',
  },
  feedback: {
    marginTop: 8,
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feedbackSuccess: {
    backgroundColor: 'rgba(22, 163, 74, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(22, 163, 74, 0.25)',
  },
  feedbackError: {
    backgroundColor: 'rgba(239, 68, 68, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.25)',
  },
  feedbackText: {
    color: '#f8fafc',
    fontWeight: '800',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.accent,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },
  nextButtonText: {
    color: COLORS.card,
    fontWeight: '800',
  },
  bottomActions: {
    gap: 10,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  resetText: {
    color: COLORS.text,
    fontWeight: '700',
  },
  tipCard: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
  },
  tipIcon: {
    backgroundColor: COLORS.accent,
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipCopy: {
    flex: 1,
    gap: 4,
  },
  tipTitle: {
    color: '#f8fafc',
    fontWeight: '800',
  },
  tipSubtitle: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
  },
  textButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  textButtonLabel: {
    color: '#3b82f6',
    fontWeight: '800',
  },
});
