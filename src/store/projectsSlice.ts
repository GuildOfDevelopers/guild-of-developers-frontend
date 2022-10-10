import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProjectResponce } from './type';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://135.181.198.180:65145/'
  }),
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectResponce, void>({
      query: () => {
        return {
          url: `projects`,
          headers: {
            'X-ACCESS-TOKEN': '54LjlkjasdlkfjlKJLKJlak4kKjjl10u5k2jlkfNLKJlkfjlkasdjflkjasl13f'
          }
        };
      }
    })
  })
});

export const { useGetProjectsQuery } = projectsApi;
