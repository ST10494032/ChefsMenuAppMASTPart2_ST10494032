import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../types';
import { Ionicons } from '@expo/vector-icons';

export default function MenuItemCard({ item, onDelete }: { item: MenuItem; onDelete: (id: string) => void }) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.course}>{item.course} • R{item.price.toFixed(2)}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteBtn}>
        <Ionicons name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    borderColor: '#d4af37',
    borderWidth: 1,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  course: {
    color: '#d4af37',
    marginTop: 4,
    marginBottom: 4,
  },
  desc: {
    color: '#cfcfcf',
  },
  deleteBtn: {
    backgroundColor: '#a0a0a0',
    padding: 8,
    borderRadius: 8,
    marginLeft: 10,
  },
});