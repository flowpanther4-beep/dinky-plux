import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HeroHeader({ title, backgroundImage, followers, viewers }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.topLabel}>Featured</Text>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.followButton}>
              <Text style={styles.followButtonText}>Following</Text>
            </TouchableOpacity>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{followers}</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{viewers}</Text>
                <Text style={styles.statLabel}>Viewers</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#0f0f14',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  image: {
    height: 320,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingHorizontal: 22,
    paddingBottom: 26,
    paddingTop: 28,
  },
  content: {
    gap: 12,
  },
  topLabel: {
    color: '#d1d5db',
    fontSize: 14,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  title: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  followButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5c518',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 10,
    shadowColor: '#f5c518',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  followButtonText: {
    color: '#3f2700',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.3,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginTop: 6,
  },
  statItem: {
    flexDirection: 'column',
    gap: 2,
  },
  statValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
  statLabel: {
    color: '#d1d5db',
    fontSize: 13,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});
