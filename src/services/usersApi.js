import axios from 'axios';

axios.defaults.baseURL = 'https://6421e46c86992901b2be8a71.mockapi.io/users';
const PER_RAGE = 4;

export async function fetchUsers(page) {
  const response = await axios.get(`?page=${page}&limit=${PER_RAGE}`);
  return response.data;
}

export async function updateUser({ id, followers }) {
  await axios.put(`/${id}`, { followers });
}
