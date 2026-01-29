import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { citiesData } from './mockData'; 

const Dashboard = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  
  
  const unit = useSelector(state => state.weather.unit);

  
  const formatTemp = useMemo(() => (tempC) => {
    if (unit === 'Fahrenheit') return (tempC * 9/5 + 32).toFixed(1) + ' °F';
    if (unit === 'Kelvin') return (tempC + 273.15).toFixed(1) + ' K';
    return tempC + ' °C';
  }, [unit]);

  
  const filteredCities = useMemo(() => {
    return citiesData.filter(city =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Prognoza Pogody</h1>
      
     
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Wyszukaj miasto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            padding: '12px', 
            width: '100%', 
            borderRadius: '8px', 
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
      </div>

      
      <div style={{ display: 'grid', gap: '15px' }}>
        {filteredCities.map(city => (
          <div 
            key={city.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '20px', 
              borderRadius: '10px',
              background: '#fff',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
          >
            
            <Link to={`/city/${city.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{city.name}</span>
                {/* Dynamiczna temperatura zależna od Redux */}
                <span style={{ fontSize: '1.3rem' }}>
                  {formatTemp(city.tempC)} {city.icon}
                </span>
              </div>
              <p style={{ margin: '10px 0 0', color: '#666', fontSize: '0.9rem' }}>
                Kliknij, aby zobaczyć szczegóły (wiatr, opady, prognoza 5-dniowa)
              </p>
            </Link>
          </div>
        ))}

        {/* Informacja o braku wyników */}
        {filteredCities.length === 0 && (
          <p style={{ textAlign: 'center', color: '#999' }}>
            Nie znaleziono miejscowości pasującej do: "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;