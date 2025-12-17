import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
          <View style={styles.badge}>
            <Ionicons name="flame" size={16} color="#0b1224" />
            <Text style={styles.badgeText}>{streak} racha</Text>
          </View>
        </View>

        <View style={styles.scoreBoard}>
          <ScoreStat label="Puntaje" value={`${score} pts`} icon="trophy" />
          <ScoreStat label="Rondas" value={`${roundsPlayed}`} icon="timer" />
          <ScoreStat label="Racha" value={`${streak} seg.`} icon="sparkles" />
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardLabel}>Frase #{roundsPlayed + 1}</Text>
            <Ionicons name="book" size={18} color={COLORS.accent} />
          </View>
          <Text style={styles.quoteText}>“{round.quote.text}”</Text>
          <View style={styles.hintRow}>
            <Ionicons name="bulb" size={16} color={COLORS.accent} />
            <Text style={styles.hintText}>{round.quote.hint}</Text>
          </View>

          <View style={styles.optionsList}>
            {round.options.map((option) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === round.quote.author;
              const disabled = Boolean(selectedOption);

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
                    <Ionicons
                      name={isCorrect ? 'checkmark-circle' : 'ellipse-outline'}
                      size={18}
                      color={isCorrect ? '#16a34a' : COLORS.text}
                    />
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
  scoreBoard: {
    flexDirection: 'row',
    gap: 10,
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
  textButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  textButtonLabel: {
    color: '#3b82f6',
    fontWeight: '800',
  },
});
