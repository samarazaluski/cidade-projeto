import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BinList = () => {
  const [bins, setBins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBins = async () => {
      try {
        const response = await axios.get('/api/bins'); // Endpoint da API para obter lixeiras
        setBins(response.data);
      } catch (err) {
        setError('Failed to fetch bins');
      }
    };

    fetchBins();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <ul>
      {bins.map(bin => (
        <li key={bin._id}>
          Location: {bin.location.coordinates[0]}, {bin.location.coordinates[1]} - Fill Level: {bin.fillLevel}%
        </li>
      ))}
    </ul>
  );
};

export default BinList;
