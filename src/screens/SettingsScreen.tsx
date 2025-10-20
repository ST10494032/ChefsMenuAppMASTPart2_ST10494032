import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings & Info</Text>
      <Text style={styles.text}>This app uses a gold & silver theme and keeps data in-memory for this PoE. All adding of menu items is done on the Menu tab (Home).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', padding: 20, paddingTop: 60 },
  title: { color: '#d4af37', fontSize: 22, fontWeight: '700', marginBottom: 8 },
  text: { color: '#cfcfcf' },
});