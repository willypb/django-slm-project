import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteCity, fetchCity, fetchStates, updateCity } from '../Api';
import './Detail.css';

export const CityDetail = ({ onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [city, setCity] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    population: '',
    area: '',
    code: '',
    timezone: '',
    state: ''
  });

  useEffect(() => {
    fetchCity(id).then((data) => {
      setCity(data);
      setFormData({
        name: data.name || '',
        population: data.population || '',
        area: data.area || '',
        code: data.code || '',
        timezone: data.timezone || '',
        state: data.state || ''
      });
    });

    fetchStates().then((data) => {
      setStates(data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCityData = await updateCity(id, formData);
    setCity(newCityData)
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteCity(id);
    onDelete();
    navigate('/')
  }

  if (!city) {
    return <p>Loading...</p>;
  }

  return (
    <div className='detail-container'>
      <h1>City Detail</h1>
      <div className='button-group'>
        <button onClick={() => setIsEditing(!isEditing)}> {isEditing ? 'Cancel' : 'Edit'} </button>
        <button id='delete' onClick={() => handleDelete()}>Delete</button>
      </div>
      {isEditing ?
        <form className="form-container" onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} required />
          <input name="population" type="number" value={formData.population} onChange={handleChange} required />
          <input name="area" type="number" value={formData.area} onChange={handleChange} required />
          <input name="code" value={formData.code} onChange={handleChange} required />
          <input name="timezone" value={formData.timezone} onChange={handleChange} required />
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option >Select State</option>
            {states.map((state) => (
              <option key={state.id} value={state.id}>{state.name}</option>
            ))}
          </select>
          <button type="submit">Save</button>
        </form>
        :
        <div>
          <p>Name: {city.name}</p>
          <p>Population: {city.population}</p>
          <p>Area: {city.area}</p>
          <p>TimeZone: {city.timezone}</p>
          <p>Code: {city.code}</p>
          {city.state && <p>State: {states.find(state => state.id === city.state)?.name}</p>}
        </div>
      }
    </div>
  );
}
