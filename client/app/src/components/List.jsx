import { ListItem } from "./ListItem";
import './List.css';

export function List({ header, listItems, onItemClick }) {
  const formattedList = !listItems ? '' : listItems.map(({id, name}) => (
    <ListItem header={name} key={id} onClick={() => onItemClick(id)}>
    </ListItem>
  ));

  return (
    <div>
      <h1>{header}</h1>
      <div className="list-container">{formattedList}</div>
    </div>
  );
}
