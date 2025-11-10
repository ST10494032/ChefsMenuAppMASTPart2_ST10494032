export type Course = 'Starters' | 'Mains' | 'Desserts' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  course: Course;
  price: number;
  description: string;
}
