import React, { FC } from 'react';
import { Form, FormName, FormWrapper, FormButton, Submit, Dropdown } from './styleFilterOpen';

const FilterOpen: FC = () => {
  const selects = [
    {
      id: 0,
      title: 'Направление'
    },
    {
      id: 1,
      title: 'Стек'
    },
    {
      id: 2,
      title: 'Дата'
    }
  ];

  const [currentSelect, setCurrentSelect] = React.useState(-1);

  return (
    <Form>
      <FormName>Фильтр</FormName>

      <FormWrapper>
        {selects.map((item) => (
          <FormButton
            type="button"
            key={item.id}
            className={currentSelect === item.id ? 'open' : ''}
            onClick={() => setCurrentSelect(item.id)}
          >
            {item.title}
          </FormButton>
        ))}

        <Submit onClick={(e) => e.preventDefault()}>Показать</Submit>
      </FormWrapper>
    </Form>
  );
};

export default FilterOpen;
