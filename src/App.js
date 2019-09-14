import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Menu} from './pages/shared'
import routes from './routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Switch>
        {routes.map(({path, component, exact}) => <Route key={path} path={path} component={component} exact={exact}/>)}
      </Switch>
    </div>
  );
}

export default App;
