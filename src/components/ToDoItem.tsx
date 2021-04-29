import React from 'react';

interface Props {
  items: string[];
}

const ToDoItem = ({ items }: Props) => {
  return (
    <div>
      {items.map((v: string) => {
        return <p key={v}>{v}</p>;
      })}
    </div>
  );
};

export default ToDoItem;
