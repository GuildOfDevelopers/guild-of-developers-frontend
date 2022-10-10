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

export type ProjectResponce = IProject[];
