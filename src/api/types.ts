interface IProject {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  startDate: string;
  finishedDate: string;
  url: string;
  registrationFormUrl: string;
  departments: [
    {
      name: string;
      stack: string[];
    }
  ];
  imageUrl: string;
  fond: string;
  participants: string;
  todo: string[];
  WhatYouGet: string[];
}

interface IMember {
  id: number;
  name: string;
  surname: string;
  nickname: string;
  department: string[];
  stack: string[];
  projectsCount: number;
  timeInGuild: string;
  img: string;
}

export type ProjectResponce = IProject[];
export type MembersResponce = IMember[];
