import React, { FC } from 'react';
import { StyledMain } from './style';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';

const Main: FC = () => {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/currentProjects" element={</>} /> */}
        {/* <Route path="/doneProjects" element={</>} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </StyledMain>
  );
};

export default Main;
