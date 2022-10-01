import React, { FC } from 'react';
import { Form, FormName, FormWrapper, Submit, Label } from './styleFilterOpen';
import { Menu } from '@headlessui/react';

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

  return (
    <Form>
      <FormName>Фильтр</FormName>

      <FormWrapper>
        {selects.map((item) => (
          <Menu key={item.id} as="div" className="filter">
            <Menu.Button>{item.title}</Menu.Button>

            <Menu.Items>
              {item.list.map((i, index) => (
                <Label key={index}>
                  <input type={item.type} name={i.name} value={i.value} />
                  <span>{i.value}</span>
                </Label>
              ))}
            </Menu.Items>
          </Menu>
        ))}

        <Submit onClick={(e) => e.preventDefault()}>Показать</Submit>
      </FormWrapper>
    </Form>
  );
};

export default FilterOpen;
