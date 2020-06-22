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

  const getProduto = (id) => (
    api.get(`/items/${id}`)
  );

  const getDescricaoProduto = (id) => (
    api.get(`/items/${id}/descriptions`)
  );

  return {
    getProdutos,
    getProduto,
    getDescricaoProduto,
  };
};

export default { create };
