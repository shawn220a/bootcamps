import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
