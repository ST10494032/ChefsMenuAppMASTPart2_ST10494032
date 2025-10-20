export type Course = 'Starters' | 'Mains' | 'Desserts' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: number; // in local currency units
}
