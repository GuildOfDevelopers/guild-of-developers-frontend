import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { MembersResponce } from './type';

export const membersApi = createApi({
  reducerPath: 'membersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://135.181.198.180:65145/',
    mode: 'no-cors'
    // prepareHeaders: (headers) => {
    //   const token = '54LjlkjasdlkfjlKJLKJlak4kKjjl10u5k2jlkfNLKJlkfjlkasdjflkjasl13f';
    //   if (token) {
    //     headers.set('X-ACCESS-TOKEN', `${token}`);
    //   }
    //   return headers;
    // },
    // credentials: 'include'
  }),
  endpoints: (builder) => ({
    getMembers: builder.query<MembersResponce, void>({
      query: () => `members`
    })
  })
});

export const { useGetMembersQuery } = membersApi;
