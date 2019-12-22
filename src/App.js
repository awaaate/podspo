import React from 'react';
import { Route , Switch,BrowserRouter} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/"  component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
