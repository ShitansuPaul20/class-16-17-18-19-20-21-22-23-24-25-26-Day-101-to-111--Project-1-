import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useUserProfile from '../Hook/userProfile';
import Profile from '../Components/profile';
import '../style/instagram.scss'; 


const ProfilePage = () => {
  const { userId } = useParams();
  const { profile, setProfile, getProfile  } =  useUserProfile();

  useEffect(() => {
    const getUserProfile = async () => {
      const data = await getProfile(userId);
      console.log(data);
    };

    getUserProfile();
  }, [userId, setProfile, getProfile]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  const isOwnProfile = (profile.id === userId);

  return (
    <Profile 
      username={profile.name} 
      profilePicture={profile.profilePicture} 
      bio={profile.bio} 
      isPrivate={profile.isPrivate} 
      posts={profile.posts} 
      reels={profile.reels} 
      tagged={profile.tagged} 
      stats={profile.stats || { postsCount: profile.posts?.length || 0, followersCount: 0, followingCount: 0 }}
      isOwnProfile={isOwnProfile}
    />
  );
};

export default ProfilePage;
