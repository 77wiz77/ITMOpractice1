import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import './Layout.scss';

function Layout() {
  return (
    <div className='body'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
