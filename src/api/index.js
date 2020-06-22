import apisauce from 'apisauce';
import ApiConstants from './ApiConstants';

const { uri, items } = ApiConstants;

const create = (baseURL = uri) => {
  const api = apisauce.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 20000,
  });

  const getProductList = (search) => (
    api.get(items, { search })
  );

  const getProductDetails = (id) => (
    api.get(`${items}/${id}`)
  );

  return {
    getProductList,
    getProductDetails,
  };
};

export default { create };
