import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProjectResponce } from './type';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://135.181.198.180:65145/',
    prepareHeaders: (headers) => {
      const token = '54LjlkjasdlkfjlKJLKJlak4kKjjl10u5k2jlkfNLKJlkfjlkasdjflkjasl13f';

      if (token) {
        headers.set('X-ACCESS-TOKEN', `${token}`);
      }

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectResponce, void>({
      query: () => `projects`
    })
  })
});

export const { useGetProjectsQuery } = projectsApi;
