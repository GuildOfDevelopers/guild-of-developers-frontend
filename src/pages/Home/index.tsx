import React, { FC } from 'react';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Projects page={'home'} />
    </>
  );
};

export default Home;
