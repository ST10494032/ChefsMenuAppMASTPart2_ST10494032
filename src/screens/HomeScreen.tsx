import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMenu } from '../context/MenuContext';
import { Course } from '../types';

export default function HomeScreen() {
  const { menuItems } = useMenu();
  const courses: Course[] = ['Starters', 'Mains', 'Desserts', 'Drinks'];

  const getAveragePrice = (course: Course): string => {
    const filtered = menuItems.filter((item) => item.course === course);
    if (filtered.length === 0) return '0.00';
    const total = filtered.reduce((sum, item) => sum + item.price, 0);
    return (total / filtered.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Average Prices by Course</Text>
      {courses.map((course) => (
        <View key={course} style={styles.card}>
          <Text style={styles.course}>{course}</Text>
          <Text style={styles.price}>R {getAveragePrice(course)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2E2E2E', padding: 20 },
  title: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#3E3E3E',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  course: { color: '#FFD700', fontSize: 18 },
  price: { color: '#C0C0C0', fontSize: 16 },
});
