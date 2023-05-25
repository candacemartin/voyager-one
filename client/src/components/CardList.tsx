import React, { useEffect, useState } from 'react';
import Card from './Card'; // Import the Card component

interface UserData {
  grow_ids: string[];
}

const CardList = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // fetch grow Ids from the db
    const fetchGrowIds = async () => {
      try {
        const response = await fetch('/api/user/:'); // confirm correct endpoint
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchGrowIds();
  }, []);

  return (
    <div>
      {userData ? (
        userData.grow_ids.map((growId) => (
          <Card key={growId} growId={growId} />
        ))
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default CardList;
