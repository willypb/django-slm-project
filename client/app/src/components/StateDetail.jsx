import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchState, fetchCountries, deleteState, updateState } from '../Api';
import './Detail.css';

export const StateDetail = ({ onDelete }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState(null);
    const [countries, setCountries] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        population: '',
        area: '',
        code: '',
        gdp: '',
        country: ''
    });

    useEffect(() => {
        fetchState(id).then((data) => {
            setState(data);
            setFormData({
                name: data.name || '',
                population: data.population || '',
                area: data.area || '',
                code: data.code || '',
                gdp: data.gdp || '',
                country: data.country || ''
            });
        });

        fetchCountries().then((data) => {
            setCountries(data)
        })
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newStateData = await updateState(id, formData);
        setState(newStateData)
        setIsEditing(false);
    };

    const handleDelete = async () => {
        await deleteState(id);
        onDelete();
        navigate('/')
    }

    if (!state) {
        return <p>Loading...</p>;
    }

    return (
        <div className='detail-container'>
            <h1>State Detail</h1>
            <div className='button-group'>
                <button onClick={() => setIsEditing(!isEditing)}> {isEditing ? 'Cancel' : 'Edit'} </button>
                <button id="delete" onClick={() => handleDelete()}>Delete</button>
            </div>
            {isEditing ?
                <form className="form-container" onSubmit={handleSubmit}>
                    <input name="name" value={formData.name} onChange={handleChange} required />
                    <input name="population" type="number" value={formData.population} onChange={handleChange} required />
                    <input name="area" type="number" value={formData.area} onChange={handleChange} required />
                    <input name="code" value={formData.code} onChange={handleChange} required />
                    <input name="gdp" value={formData.gdp} onChange={handleChange} required />
                    <select name="country" value={formData.country} onChange={handleChange} required>
                        <option >Select Country</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.id}>{country.name}</option>
                        ))}
                    </select>
                    <button type="submit">Save</button>
                </form>
                :
                <div>
                    <p>Name: {state.name}</p>
                    <p>Population: {state.population}</p>
                    <p>Area: {state.area}</p>
                    <p>Code: {state.code}</p>
                    <p>GDP: {state.gdp}</p>
                    {state.country && <p>Country: {countries.find(country => country.id == state.country)?.name}</p>}
                    {state.counties.length > 0 && <div><h3>Counties:</h3> {state.counties.map((county) => <p key={county.id}> Name: {county.name} </p>)}</div>}
                    {state.cities.length > 0 && <div><h3>Cities:</h3> {state.cities.map((city) => <p key={city.id}> Name: {city.name} </p>)}</div>}
                </div>}
        </div>
    );
}
