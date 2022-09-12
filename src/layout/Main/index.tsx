import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/currentProjects" element={</>} /> */}
        {/* <Route path="/doneProjects" element={</>} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </main>
  );
};

export default Main;
