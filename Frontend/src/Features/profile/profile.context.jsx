import { useState, useCallback } from 'react';
import { fetchUserProfile } from './services/profile.api';
import { ProfileContext } from './profileContext';

export const ProfileProvider = ({ children }) => { 
  const [profile, setProfile] = useState(null);

 
  const getProfile = useCallback(async (userId) => {
    try {
      const data = await fetchUserProfile(userId);
      setProfile(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, getProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};





