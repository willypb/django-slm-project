import './ListItem.css';

export function ListItem({ header, onClick }) {
  return (
    <div className="list-item-container" onClick={onClick}>
      <h3>{header}</h3>
    </div>
  );
}
