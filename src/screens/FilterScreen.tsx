import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from '../context/MenuContext';
import { Course } from '../types';

export default function FilterScreen() {
  const { menuItems } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<Course>('Starters');

  const filtered = menuItems.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Course</Text>
      <Picker selectedValue={selectedCourse} onValueChange={(v) => setSelectedCourse(v as Course)} style={styles.picker}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
        <Picker.Item label="Drinks" value="Drinks" />
      </Picker>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemText}>{item.name} - R{item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No items found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2E2E2E', padding: 20 },
  title: { color: '#FFD700', fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  picker: { color: '#FFD700', backgroundColor: '#3E3E3E', marginBottom: 15 },
  itemCard: {
    backgroundColor: '#3E3E3E',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  itemText: { color: '#C0C0C0' },
  empty: { color: '#C0C0C0', textAlign: 'center', marginTop: 20 },
});
