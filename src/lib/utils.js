export const getParamUrl = (name, location) => {
  const { search } = location;

  const params = new URLSearchParams(search);
  return params.get(name);
};
