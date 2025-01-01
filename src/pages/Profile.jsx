import React from 'react';
import { ProfileImage } from '../components/ProfileImage';
import { ProfileDetails } from '../components/ProfileDetails';
import { PlayerStats } from '../components/PlayerStats';
import { BackgroundElements } from '../components/BackgroundElements';
import Header from '../components/Header/Header';

function App() {
  const [profileData, setProfileData] = React.useState({
    name: "Virat Kohli",
    playerId: "PLAYER_VK18",
    dob: "05/11/1988",
    team: "Royal Challengers Bangalore",
    email: "virat.kohli@cricket.com",
    joinedDate: "January 2024",
    imageUrl: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=400&h=533&fit=crop"
  });

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData(prev => ({ ...prev, imageUrl }));
    }
  };

  const handleUpdateField = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center relative overflow-hidden">
      <BackgroundElements />
      <div className="w-full max-w-4xl mx-4 bg-white rounded-3xl shadow-2xl p-8 relative z-10">
        <div className="flex gap-8 flex-col md:flex-row">
          <ProfileImage
            imageUrl={profileData.imageUrl}
            name={profileData.name}
            onImageChange={handleImageChange}
            />
          
          <div className="flex-1 space-y-6">
            <ProfileDetails
              {...profileData}
              onUpdateField={handleUpdateField}
              />
            
            <div className="h-px bg-gray-200" />
            
            <PlayerStats
              matches={150}
              wins={98}
              losses={52}
              />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;