export const fetchDataStore = async (term) => {
  const res = await fetch(`https://fakestoreapi.com/products/${term}`);

  if (res.status !== 200 && res.status !== 404)
    throw new Error('Cannot read data');

  const data = await res.json();
  return data;
};


export const fetchUser = async (username, password) => {
  const res = await fetch(`https://edit-shop-api.herokuapp.com/api/login?username=${username}&password=${password}`);

  if (res.status !== 200)
    throw new Error('Cannot read data');

  const data = await res.json();
  return data;
};