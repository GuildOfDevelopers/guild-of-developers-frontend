import create from 'zustand';

interface IRegistrationStore {
  name: string;
  lastName: string;
  nickname: string;
  city: string;
  telegram: string;
  email: string;
  git: string;
  portfolio: string;
  text: string;
  password: string;
  confirmPassword: string;
  departments: {
    name: string;
    isCheck: boolean;
    stack: {
      name: string;
      isCheck: boolean;
    }[];
  }[];
  changeInput: (name: string, value: string) => void;
  checkedDepartments: () => {
    name: string;
    isCheck: boolean;
    stack: {
      name: string;
      isCheck: boolean;
    }[];
  }[];
  changeDeparments: (nameDepartment: string) => void;
  changeStack: (nameDepartment: string, nameStack: string) => void;
}

interface IFilterStore {
  departments: {
    name: string;
    isCheck: boolean;
    stack: {
      name: string;
      isCheck: boolean;
      departmentName: string;
    }[];
  }[];
  currentStack: {
    name: string;
    departmentName: string;
    isCheck: boolean;
  }[];
  date: {
    name: string;
    isCheck: boolean;
  }[];
  projectsType: {
    name: 'Текущие' | 'Выполненые';
    isCheck: boolean;
  }[];
  checkedDepartments: () => {
    name: string;
    isCheck: boolean;
    stack: {
      name: string;
      isCheck: boolean;
    }[];
  }[];
  changeDeparments: (nameDepartment: string) => void;
  changeCurrentStack: (nameStack: string) => void;
  changeDate: (nameDate: string) => void;
  changeProjectsType: (nameType: string) => void;
}

interface IProjectStore {
  name: string;
  date: string;
  description: string;
  role: string;
  departments: {
    name: string;
    isCheck: boolean;
  }[];
  projectLink: string;
  changeDepartments: (nameDepartment: string) => void;
  changeInput: (name: string, value: string) => void;
  checkedDepartments: () => {
    name: string;
    isCheck: boolean;
  }[];
}

const useRegistrationStore = create<IRegistrationStore>((set, get) => ({
  name: '',
  lastName: '',
  nickname: '',
  city: '',
  telegram: '',
  email: '',
  git: '',
  portfolio: '',
  text: '',
  password: '',
  confirmPassword: '',
  departments: [
    {
      name: 'Backend',
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
      isCheck: false,
      stack: []
    },
    {
      name: 'Тестировщик ПО',
      isCheck: false,
      stack: []
    },
    {
      name: 'Безопасность',
      isCheck: false,
      stack: []
    },
    {
      name: 'Project-менеджер',
      isCheck: false,
      stack: []
    },
    {
      name: 'Контроллёр',
      isCheck: false,
      stack: []
    },
    {
      name: 'Data Scientist',
      isCheck: false,
      stack: []
    }
  ],
  changeInput(name, value) {
    set({ [name]: value });
  },
  checkedDepartments() {
    return get().departments.filter((item) => item.isCheck);
  },
  changeDeparments(nameDepartment) {
    const departments = get().departments.map((item) => {
      if (item.name === nameDepartment) {
        const newItem = { ...item, isCheck: !item.isCheck };
        if (!newItem.isCheck) {
          newItem.stack.forEach((i) => (i.isCheck = false));
        }
        return newItem;
      }
      return item;
    });
    set({ departments });
  },
  changeStack(nameDepartment, nameStack) {
    const departments = get().departments.map((item) =>
      item.name === nameDepartment
        ? {
            ...item,
            stack: item.stack.map((i) => (i.name === nameStack ? { ...i, isCheck: !i.isCheck } : i))
          }
        : item
    );
    set({ departments });
  }
}));

const useFilterStore = create<IFilterStore>((set, get) => ({
  departments: [
    {
      name: 'Backend',
      isCheck: false,
      stack: [
        {
          name: 'Python',
          isCheck: false,
          departmentName: 'Backend'
        },
        {
          name: 'FastApi',
          isCheck: false,
          departmentName: 'Backend'
        },
        {
          name: 'PostgreSQL',
          isCheck: false,
          departmentName: 'Backend'
        },
        {
          name: 'PHP',
          isCheck: false,
          departmentName: 'Backend'
        }
      ]
    },
    {
      name: 'Frontend',
      isCheck: false,
      stack: [
        {
          name: 'HTML',
          isCheck: false,
          departmentName: 'Frontend'
        },
        {
          name: 'CSS',
          isCheck: false,
          departmentName: 'Frontend'
        },
        {
          name: 'JavaScript',
          isCheck: false,
          departmentName: 'Frontend'
        },
        {
          name: 'React',
          isCheck: false,
          departmentName: 'Frontend'
        },
        {
          name: 'Vue',
          isCheck: false,
          departmentName: 'Frontend'
        }
      ]
    },
    {
      name: 'UI/UX',
      isCheck: false,
      stack: []
    },
    {
      name: 'Тестировщик ПО',
      isCheck: false,
      stack: []
    },
    {
      name: 'Безопасность',
      isCheck: false,
      stack: []
    },
    {
      name: 'Project-менеджер',
      isCheck: false,
      stack: []
    },
    {
      name: 'Контроллёр',
      isCheck: false,
      stack: []
    },
    {
      name: 'Data Scientist',
      isCheck: false,
      stack: []
    }
  ],
  currentStack: [],
  date: [
    {
      name: 'За всё время',
      isCheck: false
    },
    {
      name: 'За последний день',
      isCheck: false
    },
    {
      name: 'За последние 3 дня',
      isCheck: false
    },
    {
      name: 'За последнюю неделю',
      isCheck: false
    },
    {
      name: 'За последний месяц',
      isCheck: false
    },
    {
      name: 'За последние полгода',
      isCheck: false
    }
  ],
  projectsType: [
    {
      name: 'Текущие',
      isCheck: true
    },
    {
      name: 'Выполненые',
      isCheck: false
    }
  ],
  checkedDepartments() {
    return get().departments.filter((item) => item.isCheck);
  },
  changeDeparments(nameDepartment) {
    const departments = get().departments.map((item) => {
      if (item.name === nameDepartment) {
        const newItem = { ...item, isCheck: !item.isCheck };
        if (!newItem.isCheck) {
          newItem.stack.forEach((i) => (i.isCheck = false));

          const currentStack = get().currentStack.filter(
            (stack) => stack.departmentName != nameDepartment
          );
          set({ currentStack });
        }

        if (newItem.isCheck) {
          const currentStack = get().currentStack;
          currentStack.push(...newItem.stack);
          set({ currentStack });
        }
        return newItem;
      }
      return item;
    });
    set({ departments });
  },
  changeCurrentStack(nameStack) {
    const currentStack = get().currentStack.map((item) => {
      if (item.name === nameStack) {
        const departments = get().departments.map((department) =>
          department.name === item.departmentName
            ? {
                ...department,
                stack: department.stack.map((i) =>
                  i.name === nameStack ? { ...i, isCheck: !i.isCheck } : i
                )
              }
            : department
        );
        set({ departments });

        return { ...item, isCheck: !item.isCheck };
      }
      return item;
    });
    set({ currentStack });
  },
  changeDate(nameDate) {
    const date = get().date.map((item) =>
      item.name === nameDate ? { ...item, isCheck: true } : { ...item, isCheck: false }
    );
    set({ date });
  },
  changeProjectsType(nameType) {
    const projectsType = get().projectsType.map((item) =>
      item.name === nameType ? { ...item, isCheck: true } : { ...item, isCheck: false }
    );
    set({ projectsType });
  }
}));

const useProjectStore = create<IProjectStore>((set, get) => ({
  name: '',
  date: '',
  description: '',
  role: '',
  departments: [
    {
      name: 'Backend',
      isCheck: false
    },
    {
      name: 'Frontend',
      isCheck: false
    },
    {
      name: 'UI/UX',
      isCheck: false
    },
    {
      name: 'Тестировщик ПО',
      isCheck: false
    },
    {
      name: 'Project-менеджер',
      isCheck: false
    },
    {
      name: 'Безопасность',
      isCheck: false
    },
    {
      name: 'Контроллёр',
      isCheck: false
    },
    {
      name: 'Data Scientist',
      isCheck: false
    }
  ],
  projectLink: '',

  changeInput(name, value) {
    set({ [name]: value });
  },
  checkedDepartments() {
    return get().departments.filter((item) => item.isCheck);
  },
  changeDepartments(nameDepartment) {
    const departments = get().departments.map((item) => {
      if (item.name === nameDepartment) {
        const newItem = { ...item, isCheck: !item.isCheck };
        return newItem;
      }
      return item;
    });
    set({ departments });
  }
}));

export { useRegistrationStore, useFilterStore, useProjectStore };
