import React from 'react';
import "../App.css"

export type Todo = {
    id: number;
    text: string;
  };
  

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul className='list'>
      {items.map((item, index) => (
        <li className='listItem' key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;
