import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ACCENT = '#f5c518';

export default function PredictionsPanel({ summary }) {
  const handleCreate = () => Alert.alert('Predicciones', 'Crear predicción estará disponible pronto.');
  const handleLeaderboard = () => Alert.alert('Leaderboard', 'Detalle de ranking llegará en la siguiente versión.');

  if (!summary) return null;

  return (
    <View style={styles.container}>
      <View style={styles.cardRow}>
        <TouchableOpacity style={[styles.card, styles.highlightCard]} onPress={handleCreate}>
          <Text style={styles.cardTitle}>Crear predicción</Text>
          <Text style={styles.cardSubtitle}>{summary.activePredictionTitle}</Text>
          <Text style={styles.cardAction}>Explorar ▶</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.metricLabel}>Accuracy</Text>
          <Text style={styles.metricValue}>{summary.accuracyPct}%</Text>
          <Text style={styles.metricHint}>Promedio últimos 30 días</Text>
        </View>
      </View>

      <View style={styles.leaderboard}>
        <View style={styles.leaderHeader}>
          <Text style={styles.leaderTitle}>Leaderboard</Text>
          <TouchableOpacity onPress={handleLeaderboard}>
            <Text style={styles.leaderAction}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.leaderList}>
          {summary.leaderboardPreview.map((item) => (
            <View key={item.name} style={styles.leaderItem}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.name[0]}</Text>
              </View>
              <Text style={styles.leaderName}>{item.name}</Text>
              <Text style={styles.leaderScore}>{item.score}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
  cardRow: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#0f1220',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(245,197,24,0.15)',
    gap: 10,
  },
  highlightCard: {
    backgroundColor: 'rgba(245,197,24,0.08)',
    borderColor: 'rgba(245,197,24,0.3)',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  cardSubtitle: {
    color: '#e1e4ed',
    fontSize: 14,
    lineHeight: 20,
  },
  cardAction: {
    color: ACCENT,
    fontWeight: '800',
    marginTop: 2,
  },
  metricLabel: {
    color: '#aeb6c8',
    fontSize: 13,
  },
  metricValue: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
  },
  metricHint: {
    color: '#aeb6c8',
    fontSize: 12,
  },
  leaderboard: {
    backgroundColor: '#0f1220',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(245,197,24,0.15)',
    gap: 10,
  },
  leaderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leaderTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  leaderAction: {
    color: ACCENT,
    fontSize: 13,
    fontWeight: '700',
  },
  leaderList: {
    gap: 8,
  },
  leaderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: 'rgba(245,197,24,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: ACCENT,
    fontWeight: '800',
  },
  leaderName: {
    flex: 1,
    color: '#dfe3ef',
    fontSize: 14,
    fontWeight: '700',
  },
  leaderScore: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 15,
  },
});
