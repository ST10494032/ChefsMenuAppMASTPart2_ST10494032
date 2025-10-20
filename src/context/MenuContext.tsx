import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem, Course } from '../types';

// Utility: generate initial menu items programmatically (not a hard-coded list of specific dishes)
const sampleAdjectives = ['Smoked', 'Herb', 'Spiced', 'Honey', 'Citrus', 'Charred', 'Creamy'];
const sampleBases = ['Chicken', 'Beetroot', 'Pumpkin', 'Caesar', 'Lentil', 'Salmon', 'Pasta'];
const sampleDescriptions = [
  'A carefully prepared dish using seasonal ingredients.',
  'Chef special with a modern twist.',
  'Comfort-style flavours balanced with bright notes.',
  'Light and fresh — great for a starter or side.'
];

function randomFrom<T>(arr: T[]) { return arr[Math.floor(Math.random() * arr.length)]; }

function randomCourse(): Course {
  const courses: Course[] = ['Starters', 'Mains', 'Desserts', 'Drinks'];
  return courses[Math.floor(Math.random() * courses.length)];
}

function generateSampleMenu(count = 4): MenuItem[] {
  const items: MenuItem[] = [];
  for (let i = 0; i < count; i++) {
    const name = `${randomFrom(sampleAdjectives)} ${randomFrom(sampleBases)}`;
    const price = Math.round((Math.random() * 120 + 50) * 100) / 100; // between 50 and 170
    items.push({
      id: `${Date.now()}-${i}`,
      name,
      description: randomFrom(sampleDescriptions),
      course: randomCourse(),
      price,
    });
  }
  return items;
}

type MenuContextType = {
  menu: MenuItem[];
  addItem: (item: Omit<MenuItem, 'id'>) => void;
  removeItem: (id: string) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[]>(() => generateSampleMenu(6));

  function addItem(item: Omit<MenuItem, 'id'>) {
    const newItem: MenuItem = { ...item, id: `${Date.now()}-${Math.random()}` };
    setMenu(prev => [newItem, ...prev]);
  }

  function removeItem(id: string) {
    setMenu(prev => prev.filter(i => i.id !== id));
  }

  return (
    <MenuContext.Provider value={{ menu, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('useMenu must be used inside MenuProvider');
  return ctx;
};