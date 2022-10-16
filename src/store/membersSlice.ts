import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { MembersResponce } from './types';

export const membersApi = createApi({
  reducerPath: 'membersApi',
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
    getMembers: builder.query<MembersResponce, string>({
      query: () => `members`
    })
  })
});

export const { useGetMembersQuery } = membersApi;
