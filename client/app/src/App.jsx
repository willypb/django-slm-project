import { useState, useEffect } from 'react';
import { MainComponent } from './components/MainComponent';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CountryDetail } from './components/CountryDetail';
import { StateDetail } from './components/StateDetail';
import { CityDetail } from './components/CityDetail';
import { CountyDetail } from './components/CountyDetail';
import { fetchCountries, fetchStates, fetchCities, fetchCounties, createCountry, createState, createCity, createCounty } from './Api';

function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [counties, setCounties] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [entityType, setEntityType] = useState('Country');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const countryData = await fetchCountries();
    setCountries(countryData);
    const stateData = await fetchStates();
    setStates(stateData);
    const cityData = await fetchCities();
    setCities(cityData);
    const countyData = await fetchCounties();
    setCounties(countyData);
  };

  const openModal = (type) => {
    setEntityType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  }

  const addEntity = async (data) => {
    let newEntity;
    switch (entityType) {
      case 'Country':
        newEntity = await createCountry(data);
        setCountries((prev) => [newEntity, ...prev]);
        break;
      case 'State':
        newEntity = await createState(data);
        setStates((prev) => [newEntity, ...prev]);
        break;
      case 'City':
        newEntity = await createCity(data);
        setCities((prev) => [newEntity, ...prev]);
        break;
      case 'County':
        newEntity = await createCounty(data);
        setCounties((prev) => [newEntity, ...prev]);
        break;
      default:
        break;
    }
    setModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainComponent
              countries={countries}
              states={states}
              cities={cities}
              counties={counties}
              openModal={openModal}
              modalOpen={modalOpen}
              entityType={entityType}
              addEntity={addEntity}
              closeModal={closeModal}
            />
          }
        />
        <Route path="/country/:id" element={<CountryDetail onDelete={() => loadData()} />} />
        <Route path="/state/:id" element={<StateDetail onDelete={() => loadData()} />} />
        <Route path="/city/:id" element={<CityDetail onDelete={() => loadData()} />} />
        <Route path="/county/:id" element={<CountyDetail onDelete={() => loadData()} />} />
      </Routes>
    </Router>
  );
}

export default App;
