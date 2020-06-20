import apisauce from 'apisauce';
import ApiConstants from './ApiConstants';

const { LOGIN } = ApiConstants;

const apiurl = 'http://localhost:5000';

const create = (baseURL = apiurl) => {
  const api = apisauce.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 20000,
  });

  const login = (email, senha) => (
    api.post(LOGIN, {
      email,
      senha,
    })
  );

  return { login };
};

export default { create };
