import React from 'react';
import {Link} from "react-router-dom";
import links from './links';

function Menu() {
  return (
    <div>
      {links.map(({to, label}) => <Link key={to} to={to}>{label}</Link>)}
    </div>
  );
}

export default Menu;