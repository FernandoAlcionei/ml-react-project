import apisauce from 'apisauce';
import ApiConstants from './ApiConstants';

const { uri, items, descriptions, search } = ApiConstants;

const create = (baseURL = uri) => {
  const api = apisauce.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 20000,
  });

  const getProductsList = (text) => (
    api.get(search, { q: text || 'query' })
  );

  const getProductDetails = (id) => (
    api.get(`${items}/${id}`)
  );

  const getProductDescriptions = (id) => (
    api.get(`${items}/${id}${descriptions}`)
  );

  return {
    getProductsList,
    getProductDetails,
    getProductDescriptions,
  };
};

export default { create };
