import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { citiesData } from './mockData';

const CityDetails = () => {
  const { id } = useParams();
  const unit = useSelector(state => state.weather.unit);
  
  const city = citiesData.find(c => c.id === parseInt(id));

  // Przeliczanie temperatury z użyciem useMemo 
  const convertTemp = useMemo(() => (tempC) => {
    if (unit === 'Fahrenheit') return (tempC * 9/5 + 32).toFixed(1) + '°F';
    if (unit === 'Kelvin') return (tempC + 273.15).toFixed(1) + 'K';
    return tempC + '°C';
  }, [unit]);

  if (!city) return <div>Nie znaleziono miasta.</div>;

  return (
    <div className="details">
      <h2>{city.name}</h2>
      <p>Temperatura: {convertTemp(city.tempC)} {city.icon}</p>
      <p>Zachmurzenie: {city.clouds}%</p>
      <p>Wiatr: {city.windSpeed} km/h, kierunek: {city.windDir}</p>
      <p>Opady: {city.precipProb}% ({city.precipType}, {city.precipAmount} mm/m²)</p>
      
      <h3>Prognoza na 5 dni:</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {city.forecast.map((f, index) => (
          <div key={index} style={{ border: '1px solid #eee', padding: '5px' }}>
            {f.day}: {convertTemp(f.temp)} {f.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CityDetails;