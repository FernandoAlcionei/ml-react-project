import apisauce from 'apisauce';
import ApiConstants from './ApiConstants';

const { LOGIN } = ApiConstants;

const apiurl = 'https://api.mercadolibre.com';

const create = (baseURL = apiurl) => {
  const api = apisauce.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 20000,
  });

  const getProdutos = (busca) => (
    api.get('/sites/MLA/search', { q: busca || 'query' })
  );

  return { getProdutos };
};

export default { create };
