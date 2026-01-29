import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUnit } from './store/index';
import Dashboard from './components/Dashboard';
import CityDetails from './components/CityDetails';

function App() {
  const unit = useSelector((state) => state.weather.unit);
  const dispatch = useDispatch();

  return (
    // Dodajemy <div> jako kontener nadrzędny, aby naprawić błąd renderowania
    <div className="App">
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '20px', fontWeight: 'bold' }}>Strona Główna</Link>
        
        <div style={{ float: 'right' }}>
          <span>Jednostka: </span>
          {/* Globalna zmiana jednostek temperatury - wymóg na 3.5 [cite: 39] */}
          {['Celsius', 'Fahrenheit', 'Kelvin'].map((u) => (
            <button 
              key={u} 
              onClick={() => dispatch(setUnit(u))} 
              style={{ 
                marginLeft: '5px', 
                backgroundColor: unit === u ? '#add8e6' : '#fff',
                cursor: 'pointer'
              }}
            >
              {u === 'Celsius' ? '°C' : u === 'Fahrenheit' ? '°F' : 'K'}
            </button>
          ))}
        </div>
        <div style={{ clear: 'both' }}></div>
      </nav>

      {/* Konfiguracja ścieżek nawigacji - wymóg na 3.5 [cite: 38] */}
      <Routes>
        {/* Widok główny z listą i wyszukiwarką - ocena 4.0  */}
        <Route path="/" element={<Dashboard />} />
        {/* Widok szczegółowy miejscowości - wymóg konieczny [cite: 9] */}
        <Route path="/city/:id" element={<CityDetails />} />
      </Routes>
    </div>
  );
}

export default App;