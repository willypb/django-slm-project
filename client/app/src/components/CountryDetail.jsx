import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCountry, updateCountry, deleteCountry } from '../Api';
import './Detail.css';

export const CountryDetail = ({ onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    population: '',
    area: '',
    code: ''
  });

  useEffect(() => {
    fetchCountry(id).then((data) => {
      setCountry(data);
      setFormData({
        name: data.name || '',
        population: data.population || '',
        area: data.area || '',
        code: data.code || '',
      });
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCityData = await updateCountry(id, formData);
    setCountry(newCityData)
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteCountry(id);
    onDelete();
    navigate('/')
  }

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <div className='detail-container'>
      <h1>Country Detail</h1>
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
          <button type="submit">Save</button>
        </form>
        :
        <div>
          <p>Name: {country.name}</p>
          <p>Population: {country.population}</p>
          <p>Area: {country.area}</p>
          <p>Code: {country.code}</p>
          {country.states.length > 0 && <div><strong>States:</strong> {country.states.map((state) => <p key={state.id}> Name: {state.name} </p>)}</div>}
        </div>}
    </div>
  );
}
