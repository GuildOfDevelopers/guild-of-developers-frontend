import React, { FC } from 'react';
import FilterProjects from './FilterProjects';
import FilterMembers from './FilterMembers';

interface FilterProps {
  page: string;
}

const Filter: FC<FilterProps> = ({ page }) => {
  return (
    <>
      {page === 'projects' && <FilterProjects />}
      {page === 'guildMembers' && <FilterMembers />}
    </>
  );
};

export default Filter;
