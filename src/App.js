import React from 'react';
import Professional from './Professional';
import 'react-app-polyfill/stable'
import Professinal_list from './Routing/Professional_list';
import Professional_detail from './Routing/Professional_detail';
import {BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
    
      <div>
        <h1>Task</h1>
        <Router>
          <Route exact path='/' component={Professinal_list}/>
          <Route exact path='/social/:slug' component={Professional_detail}/>
        </Router>
      </div>
    </div>
  );
};

export default App;