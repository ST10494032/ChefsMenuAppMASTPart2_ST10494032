import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useMenu } from '../context/MenuContext';
import MenuItemCard from '../components/MenuItemCard';
import { Picker } from '@react-native-picker/picker';
import { Course } from '../types';

const COURSES: Course[] = ['Starters', 'Mains', 'Desserts', 'Drinks'];

export default function HomeScreen() {
  const { menu, addItem, removeItem } = useMenu();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>('Mains');
  const [priceText, setPriceText] = useState('');

  function onAdd() {
    const price = parseFloat(priceText);
    if (!name.trim()) return Alert.alert('Validation', 'Please enter a dish name.');
    if (isNaN(price) || price <= 0) return Alert.alert('Validation', 'Please enter a valid price.');

    addItem({ name: name.trim(), description: description.trim() || 'Chef special', course, price });

    // reset
    setName('');
    setDescription('');
    setPriceText('');
    setCourse('Mains');
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Christoffel's Menu</Text>
        <Text style={styles.count}>{menu.length} items available</Text>
      </View>

      <FlatList
        style={{ width: '100%', paddingHorizontal: 16 }}
        data={menu}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => <MenuItemCard item={item} onDelete={(id) => removeItem(id)} />}
        ListEmptyComponent={<Text style={{ color: '#ddd', textAlign: 'center', marginTop: 20 }}>No menu items yet.</Text>}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
        accessibilityLabel="Add menu item"
      >
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalWrap}>
          <Text style={styles.modalTitle}>Add Menu Item</Text>
          <TextInput placeholder="Dish name" placeholderTextColor="#999" value={name} onChangeText={setName} style={styles.input} />
          <TextInput placeholder="Description" placeholderTextColor="#999" value={description} onChangeText={setDescription} style={[styles.input, { height: 80 }]} multiline />

          <View style={styles.pickerWrap}>
            <Picker selectedValue={course} onValueChange={(v) => setCourse(v as Course)}>
              {COURSES.map(c => (
                <Picker.Item key={c} label={c} value={c} />
              ))}
            </Picker>
          </View>

          <TextInput placeholder="Price (e.g. 120.50)" placeholderTextColor="#999" value={priceText} onChangeText={setPriceText} keyboardType="numeric" style={styles.input} />

          <View style={{ flexDirection: 'row', gap: 12 }}>
            <TouchableOpacity style={styles.btnPrimary} onPress={onAdd}>
              <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary} onPress={() => setModalVisible(false)}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    paddingTop: 48,
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  title: {
    color: '#d4af37',
    fontSize: 26,
    fontWeight: '800',
  },
  count: {
    color: '#ffffffff',
    marginTop: 6,
  },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 28,
    height: 62,
    width: 62,
    borderRadius: 31,
    backgroundColor: '#d4af37',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    elevation: 6,
  },
  fabText: { fontSize: 32, color: '#111', lineHeight: 32 },
  modalWrap: {
    flex: 1,
    backgroundColor: '#000000ff',
    padding: 20,
    paddingTop: 60,
  },
  modalTitle: { color: '#d4af37', fontSize: 22, fontWeight: '700', marginBottom: 12 },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#ffffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  pickerWrap: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    marginBottom: 12,
  },
  btnPrimary: {
    backgroundColor: '#d4af37',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  btnSecondary: {
    backgroundColor: '#000000ff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  btnText: { color: '#000000ff', fontWeight: '700' },
});