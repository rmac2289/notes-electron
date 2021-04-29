import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import ToDo from './components/ToDo';
import MyCalendar from './components/Calendar';
import Menu from './components/Menu';

export default function App() {
  return (
    <HashRouter>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar" component={MyCalendar} />
      <Route exact path="/todo" component={ToDo} />
    </HashRouter>
  );
}
