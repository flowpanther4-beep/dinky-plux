import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import TopStoryHero from '../components/TopStoryHero';
import TrackerStatCard from '../components/TrackerStatCard';
import PredictionsPanel from '../components/PredictionsPanel';
import NewsRow from '../components/NewsRow';
import { mockHome } from '../data/mockHome';

const ACCENT = '#f5c518';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [newsData, setNewsData] = useState([]);
  const [simulateError] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (simulateError && attempt === 0) {
        setError(true);
        setLoading(false);
        return;
      }

      setNewsData(mockHome.news);
      setError(false);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [attempt, simulateError]);

  const filteredNews = useMemo(() => {
    if (!searchQuery) return newsData;
    const query = searchQuery.toLowerCase();
    return newsData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query),
    );
  }, [newsData, searchQuery]);

  const handleRetry = () => {
    setError(false);
    setLoading(true);
    setAttempt((prev) => prev + 1);
  };

  const renderNewsSection = () => {
    if (loading) {
      return (
        <View style={styles.stateCard}>
          <ActivityIndicator color={ACCENT} />
          <Text style={styles.stateText}>Actualizando briefing...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.stateCard}>
          <Text style={styles.stateTitle}>No pudimos cargar las noticias</Text>
          <Text style={styles.stateText}>Revisa tu conexión y vuelve a intentar.</Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
            <Text style={styles.retryText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (!filteredNews.length) {
      return (
        <View style={styles.stateCard}>
          <Text style={styles.stateTitle}>Sin resultados</Text>
          <Text style={styles.stateText}>Ajusta tu búsqueda o revisa otras categorías.</Text>
        </View>
      );
    }

    return (
      <View style={styles.newsList}>
        {filteredNews.map((item) => (
          <NewsRow key={item.id} item={item} />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <HomeHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <TopStoryHero story={mockHome.topStory} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mandate Tracker</Text>
          <View style={styles.trackerGrid}>
            {mockHome.trackerStats.map((stat) => (
              <TrackerStatCard key={stat.id} stat={stat} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Predicciones</Text>
          <PredictionsPanel summary={mockHome.predictionsSummary} />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Noticias rápidas</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{filteredNews.length || newsData.length} ítems</Text>
            </View>
          </View>
          {renderNewsSection()}
        </View>

        <Text style={styles.disclaimer}>Datos informativos. No constituye asesoría.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#05060a',
  },
  scrollContent: {
    paddingBottom: 32,
    backgroundColor: '#05060a',
    gap: 24,
  },
  section: {
    paddingHorizontal: 20,
    gap: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: '#f2f4f7',
    fontSize: 18,
    fontWeight: '900',
  },
  trackerGrid: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  newsList: {
    gap: 10,
  },
  stateCard: {
    backgroundColor: '#0f1220',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    gap: 8,
  },
  stateTitle: {
    color: '#f2f4f7',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  stateText: {
    color: '#9aa3b9',
    textAlign: 'center',
  },
  retryButton: {
    marginTop: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: ACCENT,
  },
  retryText: {
    color: '#2a1b00',
    fontWeight: '800',
  },
  badge: {
    backgroundColor: 'rgba(245,197,24,0.12)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    color: ACCENT,
    fontWeight: '800',
    fontSize: 12,
  },
  disclaimer: {
    color: '#6e7383',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
