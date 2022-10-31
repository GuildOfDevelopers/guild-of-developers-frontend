import create from 'zustand';

interface IRegistrationStore {
  departments: {
    name: string;
    isCheck: boolean;
    stack: {
      name: string;
      isCheck: boolean;
    }[];
  }[];
  // increasePopulation: () => void;
  // removeAllBears: () => void;
}

const useRegistrationStore = create<IRegistrationStore>((set) => ({
  departments: [
    {
      name: 'Backend',
      isCheck: true,
      stack: [
        {
          name: 'Python',
          isCheck: true
        },
        {
          name: 'FastApi',
          isCheck: false
        },
        {
          name: 'PostgreSQL',
          isCheck: false
        },
        {
          name: 'PHP',
          isCheck: true
        }
      ]
    },
    {
      name: 'Frontend',
      isCheck: false,
      stack: [
        {
          name: 'HTML',
          isCheck: false
        },
        {
          name: 'CSS',
          isCheck: false
        },
        {
          name: 'JavaScript',
          isCheck: false
        },
        {
          name: 'React',
          isCheck: false
        },
        {
          name: 'Vue',
          isCheck: false
        }
      ]
    },
    {
      name: 'UI/UX',
      isCheck: true,
      stack: [
        {
          name: 'Python',
          isCheck: false
        },
        {
          name: 'FastApi',
          isCheck: false
        },
        {
          name: 'PostgreSQL',
          isCheck: false
        },
        {
          name: 'PHP',
          isCheck: false
        }
      ]
    },
    {
      name: 'Тестировщик ПО',
      isCheck: false,
      stack: [
        {
          name: 'Python',
          isCheck: false
        },
        {
          name: 'FastApi',
          isCheck: false
        },
        {
          name: 'PostgreSQL',
          isCheck: false
        },
        {
          name: 'PHP',
          isCheck: false
        }
      ]
    },
    {
      name: 'Project-менеджер',
      isCheck: false,
      stack: [
        {
          name: 'Python',
          isCheck: false
        },
        {
          name: 'FastApi',
          isCheck: false
        },
        {
          name: 'PostgreSQL',
          isCheck: false
        },
        {
          name: 'PHP',
          isCheck: false
        }
      ]
    },
    {
      name: 'Контроллёр',
      isCheck: false,
      stack: [
        {
          name: 'Python',
          isCheck: false
        },
        {
          name: 'FastApi',
          isCheck: false
        },
        {
          name: 'PostgreSQL',
          isCheck: false
        },
        {
          name: 'PHP',
          isCheck: false
        }
      ]
    },
    {
      name: 'Data Scientist',
      isCheck: false,
      stack: [
        {
          name: 'Python',
          isCheck: false
        },
        {
          name: 'FastApi',
          isCheck: false
        },
        {
          name: 'PostgreSQL',
          isCheck: false
        },
        {
          name: 'PHP',
          isCheck: false
        }
      ]
    }
  ],
  // checkedDeparments: (name: string) => set((state) => ({
  //   const department = state.departments.filter((item) => item.name === 'frontend');
  // })))
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 })
}));

export { useRegistrationStore };
