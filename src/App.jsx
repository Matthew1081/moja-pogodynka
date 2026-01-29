import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUnit } from './store/index';
import Dashboard from './components/Dashboard';
import CityDetails from './components/CityDetails';

function App() {
  const unit = useSelector((state) => state.weather.unit);
  const dispatch = useDispatch();

  return (
    
    <div className="App">
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '20px', fontWeight: 'bold' }}>Strona Główna</Link>
        
        <div style={{ float: 'right' }}>
          <span>Jednostka: </span>
          
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

      
      <Routes>
        
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/city/:id" element={<CityDetails />} />
      </Routes>
    </div>
  );
}

export default App;