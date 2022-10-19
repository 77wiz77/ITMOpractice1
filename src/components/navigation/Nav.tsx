import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <div>
      <nav className='nav'>
        <Link to='/glossary' className='nav-link'>
          <div>Глоссарий</div>
        </Link>
        <Link to='/mindmap' className='nav-link'>
          <div>Семантический граф</div>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
