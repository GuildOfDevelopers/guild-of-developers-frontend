import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import CurrentProjects from '../../pages/CurrentProjects';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currentProjects" element={<CurrentProjects />} />
        {/* <Route path="/doneProjects" element={</>} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </main>
  );
};

export default Main;
