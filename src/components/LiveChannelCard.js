import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function LiveChannelCard({ title, viewers, thumbnail, avatar }) {
  return (
    <View style={styles.card}>
      <View style={styles.thumbnailWrapper}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.metaRow}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <Text style={styles.viewers}>{viewers} viewers</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 18,
    padding: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  thumbnailWrapper: {
    position: 'relative',
  },
  thumbnail: {
    width: 120,
    height: 80,
    borderRadius: 14,
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#ff375f',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    shadowColor: '#ff375f',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  liveText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  info: {
    flex: 1,
    gap: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  viewers: {
    color: '#cfd2dc',
    fontSize: 13,
  },
});
