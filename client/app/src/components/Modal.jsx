import './Modal.css'
import { useState, useEffect } from 'react';
export const Modal = ({ isOpen, onClose, entityType, relatedEntities, onAddEntity }) => {
    const [formData, setFormData] = useState({});
  
    useEffect(() => {
      if (isOpen) {
        setFormData({});
      }
    }, [isOpen]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddEntity(formData);
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Add {entityType}</h2>
          <form onSubmit={handleSubmit}>
            {entityType === 'Country' && (
              <>
                <input name="name" placeholder="Country Name" onChange={handleChange} required />
                <input name="population" type="number" placeholder="Population" onChange={handleChange} required />
                <input name="area" type="number" placeholder="Area (km²)" onChange={handleChange} required />
                <input name="code" placeholder="Country Code" onChange={handleChange} required />
              </>
            )}
            {entityType === 'State' && (
              <>
                <input name="name" placeholder="State Name" onChange={handleChange} required />
                <input name="population" type="number" placeholder="Population" onChange={handleChange} required />
                <input name="area" type="number" placeholder="Area (km²)" onChange={handleChange} required />
                <input name="code" placeholder="State Code" onChange={handleChange} required />
                <input name="gdp" type="number" placeholder="GDP" onChange={handleChange} required />
                <select name="country" onChange={handleChange} required>
                  <option value="">Select Country</option>
                  {relatedEntities.countries.map((country) => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))}
                </select>
              </>
            )}
            {entityType === 'City' && (
              <>
                <input name="name" placeholder="City Name" onChange={handleChange} required />
                <input name="population" type="number" placeholder="Population" onChange={handleChange} required />
                <input name="area" type="number" placeholder="Area (km²)" onChange={handleChange} required />
                <input name="code" placeholder="City Code" onChange={handleChange} required />
                <input name="timezone" placeholder="Timezone" onChange={handleChange} required />
                <select name="state" onChange={handleChange} required>
                  <option value="">Select State</option>
                  {relatedEntities.states.map((state) => (
                    <option key={state.id} value={state.id}>{state.name}</option>
                  ))}
                </select>
              </>
            )}
            {entityType === 'County' && (
              <>
                <input name="name" placeholder="County Name" onChange={handleChange} required />
                <input name="population" type="number" placeholder="Population" onChange={handleChange} required />
                <input name="area" type="number" placeholder="Area (km²)" onChange={handleChange} required />
                <input name="code" placeholder="County Code" onChange={handleChange} required />
                <select name="state" onChange={handleChange} required>
                  <option value="">Select State</option>
                  {relatedEntities.states.map((state) => (
                    <option key={state.id} value={state.id}>{state.name}</option>
                  ))}
                </select>
              </>
            )}
            <div>
            <button type="submit">Add</button>
            <button type="button" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  