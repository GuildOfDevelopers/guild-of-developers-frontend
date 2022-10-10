import React, { FC } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import { useGetProjectsQuery } from './store/projectsSlice';

const App: FC = () => {
  const data = useGetProjectsQuery();
  console.log(data);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
