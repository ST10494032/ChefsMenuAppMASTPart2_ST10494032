import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from '../context/MenuContext';
import { MenuItem, Course } from '../types';
import { Ionicons } from '@expo/vector-icons';

export default function AddMenuItemScreen() {
  const { menuItems, addMenuItem, removeMenuItem } = useMenu();
  const [name, setName] = useState('');
  const [course, setCourse] = useState<Course>('Starters');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name || !price) return;
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name,
      course,
      price: parseFloat(price),
    };
    addMenuItem(newItem);
    setName('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>

      <TextInput
        placeholder="Item name"
        placeholderTextColor="#C0C0C0"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Price (R)"
        placeholderTextColor="#C0C0C0"
        keyboardType="numeric"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
      />
      <Picker selectedValue={course} onValueChange={(value) => setCourse(value as Course)} style={styles.picker}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
        <Picker.Item label="Drinks" value="Drinks" />
      </Picker>

      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addText}>Add Item</Text>
      </TouchableOpacity>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemText}>
              {item.name} - R{item.price} ({item.course})
            </Text>
            <TouchableOpacity onPress={() => removeMenuItem(item.id)}>
              <Ionicons name="trash" size={20} color="#FFD700" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2E2E2E', padding: 20 },
  title: { color: '#FFD700', fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  input: {
    backgroundColor: '#3E3E3E',
    color: 'white',
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  picker: { color: '#FFD700', backgroundColor: '#3E3E3E', borderRadius: 8, marginVertical: 8 },
  addButton: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  addText: { textAlign: 'center', color: '#2E2E2E', fontWeight: 'bold' },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3E3E3E',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  itemText: { color: '#C0C0C0' },
});
