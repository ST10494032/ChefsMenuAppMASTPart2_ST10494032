import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings & Info (For Jokes)</Text>
      <Text style={styles.text}>This app uses a Gold and Silver Style to bgring out Christoffels profesionalism. It also keeps the data in-memory. All adding of menu items is done only by Christoffel by the HomePage using the "+" icon in the bottom right of the screen.</Text>
      <Text style={styles.text}>This was developed for Christoffel by yours truly. Christoffelis a well kn own classy gentlamen with good taste for food. Making anithing touching your pallet a blessing for the Gods.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000ff', padding: 20, paddingTop: 60 },
  title: { color: '#d4af37', fontSize: 22, fontWeight: '700', marginBottom: 8 },
  text: { color: '#ffffffff' },
});