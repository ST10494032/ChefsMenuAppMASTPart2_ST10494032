import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings & Info (For Jokes)</Text>
      <Text style={styles.text}>This app uses a gold/Silver Style and keeps data in-memory. All adding of menu items is done on the Menu tab (HomePage) using the "+" icon in the bottom right of the screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000ff', padding: 20, paddingTop: 60 },
  title: { color: '#d4af37', fontSize: 22, fontWeight: '700', marginBottom: 8 },
  text: { color: '#ffffffff' },
});