import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteCounty, fetchCounty, fetchStates, updateCounty } from '../Api';
import './Detail.css';

export const CountyDetail = ({ onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [county, setCounty] = useState(null);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    population: '',
    area: '',
    code: '',
    state: ''
  });

  useEffect(() => {
    fetchCounty(id).then((data) => {
      setCounty(data);
      setFormData({
        name: data.name || '',
        population: data.population || '',
        area: data.area || '',
        code: data.code || '',
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
    const newCityData = await updateCounty(id, formData);
    setCounty(newCityData)
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteCounty(id);
    onDelete();
    navigate('/')
  }

  if (!county) {
    return <p>Loading...</p>;
  }

  return (
    <div className="detail-container">
      <h1>County Detail</h1>
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
          <p>Name: {county.name}</p>
          <p>Population: {county.population}</p>
          <p>Area: {county.area}</p>
          <p>Code: {county.code}</p>
          {county.state && <p>State: {states.find(state => state.id === county.state)?.name}</p>}
        </div>}
    </div>
  );
}
