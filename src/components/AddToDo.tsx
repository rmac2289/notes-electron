import React from 'react';

const AddToDo = () => {
  return (
    <form>
      <label>
        add item
        <input type="text" />
      </label>
      <button type="submit">+</button>
    </form>
  );
};

export default AddToDo;
