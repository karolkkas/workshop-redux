import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, GalleryPage} from './pages';
import {Menu} from './pages/shared'

import './App.css';

function App() {
  return (
    <div className="App">
        <Menu />
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/gallery" component={GalleryPage}/>
        </Switch>
    </div>
  );
}

export default App;
