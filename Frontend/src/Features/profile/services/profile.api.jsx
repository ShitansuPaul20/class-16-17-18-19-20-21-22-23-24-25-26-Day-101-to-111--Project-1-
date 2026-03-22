import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true 
});

const fetchUserProfile = async (userId) => {
  try {
   
    const response = await api.get(`/api/user/profile/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export { fetchUserProfile };