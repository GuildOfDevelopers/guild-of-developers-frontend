import React, { FC, useEffect } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import { useGetProjectsQuery } from './store/projectsSlice';

const App: FC = () => {
  useEffect(() => {
    fetch('http://135.181.198.180:65145/projects', { mode: 'no-cors' })
      .then((response) => response.json())
      .then((json) => console.log(json));

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
