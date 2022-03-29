const fetchDataStore = async (term) => {
  const res = await fetch(`https://fakestoreapi.com/products${term}`);

  if (res.status !== 200)
    throw new Error('Cannot read data');

  const data = await res.json();
  return data;
}

export default fetchDataStore;