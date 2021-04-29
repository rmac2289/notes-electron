import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/menu.module.css';

export default function Menu() {
  const today: Date = new Date();

  return (
    <div className={styles.menu}>
      <ul>
        <li className={styles.li}>
          <Link to="/calendar">calendar</Link>
        </li>
        <li className={styles.li}>
          <Link to="/todo">to do</Link>
        </li>
      </ul>
      <h2 className={styles.date}>{today.toLocaleDateString()}</h2>
    </div>
  );
}
