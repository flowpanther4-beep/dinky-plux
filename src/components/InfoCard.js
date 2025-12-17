import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InfoCard({ icon, title, description, tag }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          {tag ? <Text style={styles.tag}>{tag}</Text> : null}
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef2ff',
    marginRight: 12,
  },
  icon: {
    fontSize: 22,
  },
  content: {
    flex: 1,
    gap: 6,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    marginRight: 10,
  },
  tag: {
    fontSize: 12,
    color: '#4338ca',
    backgroundColor: '#ede9fe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 21,
  },
});
