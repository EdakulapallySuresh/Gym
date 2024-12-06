export interface Gym {
  id: string;
  name: string;
  address: string;
  image: string;
  rating: number;
  amenities: string[];
  price: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Booking {
  id: string;
  userId: string;
  gymId: string;
  date: Date;
  timeSlot: string;
}