import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Nav from '../components/navigation/Nav';

const Main: React.FC = () => {
  return (
    <main className='main'>
      <Nav />
      <Outlet />
    </main>
  );
};

export default Main;
