import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
  updateUserProfile: (data: Partial<User>) => void;
}

interface User {
  name?: string;
  email: string;
  bio?: string;
  location?: string;
  website?: string;
  avatar?: string;
  projects?: Project[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  createdAt: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Проверяем, есть ли сохраненный пользователь при загрузке
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    // В реальном приложении здесь был бы API запрос
    const mockProjects = [
      {
        id: 1,
        title: "Personal Portfolio",
        description: "My developer portfolio showcasing my skills and projects",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=20",
        category: "portfolio",
        rating: 4.8,
        createdAt: "2023-10-15"
      },
      {
        id: 2,
        title: "E-commerce Website",
        description: "A fully functional e-commerce website with product catalog and cart",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=21",
        category: "web",
        rating: 4.5,
        createdAt: "2023-11-20"
      },
      {
        id: 3,
        title: "Mobile App Design",
        description: "UI/UX design for a fitness tracking mobile application",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=22",
        category: "design",
        rating: 4.9,
        createdAt: "2024-01-05"
      }
    ];
    
    const user = { 
      email,
      name: email.split('@')[0],
      bio: "Frontend developer passionate about creating beautiful and functional user interfaces",
      location: "New York, USA",
      website: "https://example.com",
      projects: mockProjects
    };
    
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const signup = (name: string, email: string, password: string) => {
    // В реальном приложении здесь был бы API запрос
    const user = { 
      name, 
      email,
      projects: []
    };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const updateUserProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};