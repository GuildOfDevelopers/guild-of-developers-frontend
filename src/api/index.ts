import axios from 'axios';

const token = '54LjlkjasdlkfjlKJLKJlak4kKjjl10u5k2jlkfNLKJlkfjlkasdjflkjasl13f';
const instance = axios.create({
  baseURL: 'http://135.181.198.180:65145/',
  headers: { 'X-ACCESS-TOKEN': `${token}` }
});

export const getMembers = () => instance.get('/members').then((res) => res.data);
export const getProjects = () => instance.get('/projects').then((res) => res.data);
