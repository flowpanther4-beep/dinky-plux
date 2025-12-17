import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ScreenLayout({ title, description, children, headerRight }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View style={styles.headerTextContainer}>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            {description ? <Text style={styles.description}>{description}</Text> : null}
          </View>
          {headerRight ? <View style={styles.headerRight}>{headerRight}</View> : null}
        </View>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 22,
  },
  headerRight: {
    marginLeft: 12,
  },
  content: {
    gap: 12,
  },
});
