import React, { FC, useEffect } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
