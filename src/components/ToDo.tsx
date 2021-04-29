import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import styles from '../styles/todo.module.css';
import AddToDo from './AddToDo';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'item', headerName: 'Item', width: 130 },
  { field: 'due', headerName: 'Due Date', width: 130 },
  {
    field: 'priority',
    headerName: 'Priority',
    type: 'number',
    width: 120,
  },
];

const rows = [
  { id: 1, item: 'Laundry', due: 'Sunday', priority: 2 },
  { id: 2, item: 'Dishes', due: 'Today', priority: 1 },
  { id: 3, item: 'Clean Deck', due: 'Monday', priority: 3 },
  { id: 4, item: 'Take out trash', due: 'Today', priority: 1 },
  { id: 5, item: 'Dust shelves', due: 'Next week', priority: 4 },
];

const ToDo = () => {
  return (
    <div className={styles.todo}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          className={styles.table}
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
        <AddToDo />
      </div>
    </div>
  );
};

export default ToDo;
