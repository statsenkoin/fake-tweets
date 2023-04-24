import axios from 'axios';

axios.defaults.baseURL = 'https://6421e46c86992901b2be8a71.mockapi.io/users';
// axios.defaults.params = { limit: 3 };
const perPage = 3;

export async function fetchUsers(page) {
  const response = await axios.get(`?page=${page}&limit=${perPage}`);
  return response.data;
}

export async function updateUser({ id, followers }) {
  await axios.put(`/${id}`, { followers });
}
