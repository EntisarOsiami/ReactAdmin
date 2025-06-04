import axios from 'axios';

const URL = 'https://6836f2e3664e72d28e42d386.mockapi.io/auth';

export const getByName = (username) => axios.get(`${URL}?username=${username}`);
export const getById = (id) => axios.get(`${URL}/${id}`);
export const apiRegister = (data) => axios.post(URL, data);
export const getByMail = async (email) => {
  try {
    const res = await axios.get(`${URL}?email=${email}`);
    return res.data.length > 0;
  } catch (err) {
    console.error(err);
    return false;
  }
};
