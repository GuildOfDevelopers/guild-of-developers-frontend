import React, { FC } from 'react';
import { Form, FormName, FormWrapper, Submit } from './styleFilterOpen';
import Dropdown from './Dropdown';

const FilterOpen: FC = () => {
  const selects = [
    {
      id: 0,
      title: 'Направление',
      type: 'checkbox',
      list: [
        {
          name: 'direction[]',
          value: 'Backend',
          val: false
        },
        {
          name: 'direction[]',
          value: 'Frontend',
          val: false
        },
        {
          name: 'direction[]',
          value: 'UI/UX',
          val: false
        },
        {
          name: 'direction[]',
          value: 'Тестировщик ПО',
          val: false
        },
        {
          name: 'direction[]',
          value: 'Project-менеджер',
          val: false
        },
        {
          name: 'direction[]',
          value: 'Контроллёр',
          val: false
        },
        {
          name: 'direction[]',
          value: 'Data Scientist',
          val: false
        }
      ]
    },
    {
      id: 1,
      title: 'Стек',
      type: 'checkbox',
      list: [
        {
          name: 'stack[]',
          value: 'Python',
          val: false
        },
        {
          name: 'stack[]',
          value: 'FastApi',
          val: false
        },
        {
          name: 'stack[]',
          value: 'PostgreSQL',
          val: false
        },
        {
          name: 'stack[]',
          value: 'Тестировщик ПО',
          val: false
        },
        {
          name: 'stack[]',
          value: 'pydantic',
          val: false
        }
      ]
    },
    {
      id: 2,
      title: 'Дата',
      type: 'radio',
      list: [
        {
          name: 'date',
          value: 'За всё время',
          val: false
        },
        {
          name: 'date',
          value: 'За последний день',
          val: false
        },
        {
          name: 'date',
          value: 'За последние 3 дня',
          val: false
        },
        {
          name: 'date',
          value: 'За последнюю неделю',
          val: false
        },
        {
          name: 'date',
          value: 'За последний месяц',
          val: false
        },
        {
          name: 'date',
          value: 'За последние полгода',
          val: false
        }
      ]
    }
  ];

  const [currentSelect, setCurrentSelect] = React.useState(-1);

  return (
    <Form>
      <FormName>Фильтр</FormName>

      <FormWrapper>
        {selects.map((item) => (
          <Dropdown item={{ ...item, currentSelect, setCurrentSelect }} key={item.id} />
        ))}

        <Submit onClick={(e) => e.preventDefault()}>Показать</Submit>
      </FormWrapper>
    </Form>
  );
};

export default FilterOpen;
