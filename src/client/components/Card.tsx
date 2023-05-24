import React, { useEffect, useState } from 'react';

interface CardData {
    _id: string;
    mushroom_type: string;
    container: string;
    substrate: string;
    inoculation_method: string;
    start_date: Date;
}

const Card = () => {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    // fetch grow data from db
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user/grow/:'); // confirm this endpoint
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item._id}>
            <h3>{item.mushroom_type}</h3>
            <p>Container: {item.container}</p>
            <p>Substrate: {item.substrate}</p>
            <p>Inoculation Method: {item.inoculation_method}</p>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Card;

