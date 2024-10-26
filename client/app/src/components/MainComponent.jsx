import { Modal } from './Modal'
import { List } from './List'
import { useNavigate } from 'react-router-dom';

export const MainComponent = ({ countries, states, cities, counties, openModal, modalOpen, closeModal, entityType, addEntity }) => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Will Bassett - SLM</h1>
            <div className='entity-list-containers'>
                <div>
                    <button onClick={() => openModal('Country')}>Add Country +</button>
                    <List
                        header="Countries"
                        listItems={countries.map(({ id, name }) => ({ id, name }))}
                        onItemClick={(id) => navigate(`/country/${id}`)}
                    />
                </div>
                <div>
                    <button onClick={() => openModal('State')}>Add State +</button>
                    <List
                        header="States"
                        listItems={states.map(({ id, name }) => ({ id, name }))}
                        onItemClick={(id) => navigate(`/state/${id}`)}
                    />
                </div>
                <div>
                    <button onClick={() => openModal('City')}>Add City +</button>
                    <List
                        header="Cities"
                        listItems={cities.map(({ id, name }) => ({ id, name }))}
                        onItemClick={(id) => navigate(`/city/${id}`)}
                    />
                </div>
                <div>
                    <button onClick={() => openModal('County')}>Add County +</button>
                    <List
                        header="Counties"
                        listItems={counties.map(({ id, name }) => ({ id, name }))}
                        onItemClick={(id) => navigate(`/county/${id}`)}
                    />
                </div>
            </div>
            <Modal
                isOpen={modalOpen}
                entityType={entityType}
                relatedEntities={{ countries, states }}
                onAddEntity={addEntity}
                onClose={closeModal}
            />
        </>
    );
};