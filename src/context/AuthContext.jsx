import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const DEFAULT_USER = {
  id: 'usr_qb_9841',
  name: 'Arjun Sharma',
  username: 'arjun_quant',
  email: 'arjun.sharma@iitm.ac.in',
  role: 'Quant Researcher & Algorithmic Fellow',
  institution: 'IIT Madras (Department of Data Science & AI)',
  location: 'Bengaluru / Chennai, Bharat',
  bio: 'Exploring stochastic volatility, Black-Scholes Greeks, high-throughput C++ execution engines, and topological graph embeddings for Indian algorithmic markets.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  rating: 1842,
  tier: 'Bharat Diamond',
  nationalRank: 14,
  streakDays: 18,
  solvedCount: 142,
  contributions: 84,
  accuracy: 78.4,
  joinDate: 'March 2024',
  isLoggedIn: true,
  badges: [
    { id: 'b1', name: 'National Top 20', icon: '🏆', desc: 'Ranked in top 20 across Bharat quant benchmarks' },
    { id: 'b2', name: 'Stochastic Prodigy', icon: '⚡', desc: 'Solved 40+ continuous probability challenges' },
    { id: 'b3', name: '18-Day Inferno', icon: '🔥', desc: 'Maintained 18 consecutive days of active computation' },
    { id: 'b4', name: 'C++ Low Latency', icon: '⚙️', desc: 'Sub-millisecond runtime optimizations benchmarked' },
  ]
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('qb_auth_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_USER;
      }
    }
    return DEFAULT_USER;
  });

  useEffect(() => {
    localStorage.setItem('qb_auth_user', JSON.stringify(user));
  }, [user]);

  const login = (email, password) => {
    const updated = {
      ...DEFAULT_USER,
      email: email || DEFAULT_USER.email,
      isLoggedIn: true
    };
    setUser(updated);
    return true;
  };

  const signup = ({ name, email, username, institution }) => {
    const newUser = {
      ...DEFAULT_USER,
      name: name || 'Indian Quant Innovator',
      email: email || 'user@quantbharat.in',
      username: username || 'bharat_quant',
      institution: institution || 'Bharat Tech Community',
      rating: 1200,
      tier: 'Bharat Explorer',
      nationalRank: 420,
      streakDays: 1,
      solvedCount: 0,
      isLoggedIn: true
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(prev => ({
      ...prev,
      isLoggedIn: false
    }));
  };

  const updateProfile = (data) => {
    setUser(prev => ({
      ...prev,
      ...data
    }));
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
