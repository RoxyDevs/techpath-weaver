export type Mentor = {
  name: string;
  title: string;
  specialties: string[];
  imageUrl: string;
  imageHint: string;
};

export type UserProfile = {
  authId: string;
  name: string;
  email: string;
  photoURL?: string;
  role: 'usuaria' | 'mentora' | 'admin';
  skills?: string[];
  experience?: string;
  interests?: string[];
  goals?: string;
};
