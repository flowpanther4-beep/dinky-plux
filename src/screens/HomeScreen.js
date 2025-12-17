import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HeroHeader from '../components/HeroHeader';
import LiveChannelCard from '../components/LiveChannelCard';
import SectionTitle from '../components/SectionTitle';

const liveChannels = [
  {
    title: 'Endgame scrims with the squad – drop in and dominate',
    viewers: '42.1K',
    thumbnail:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80',
  },
  {
    title: 'Road to champs | controller grind | zero build tourney prep',
    viewers: '18.4K',
    thumbnail:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80',
  },
  {
    title: 'Arena solos only – late game rush with viewers',
    viewers: '9.3K',
    thumbnail:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
  },
  {
    title: 'Creative maps + custom lobbies | sub games all night',
    viewers: '6.7K',
    thumbnail:
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <HeroHeader
          title="FORTNITE"
          backgroundImage="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80"
          followers="12.4M"
          viewers="245K"
        />

        <View style={styles.bottomPanel}>
          <SectionTitle title="Live Channels" />
          <View style={styles.list}>
            {liveChannels.map((channel) => (
              <LiveChannelCard key={channel.title} {...channel} />
            ))}
          </View>
        </View>
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
    paddingBottom: 26,
  },
  bottomPanel: {
    backgroundColor: '#0d0f15',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    gap: 16,
    marginTop: -12,
  },
  list: {
    gap: 14,
  },
});
