const mercadoUrl = (item) => `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

const fetchProducts = (item) => {
  const results = [];
  fetch(mercadoUrl(item))
  .then((response) => response.json())
  .then((data) => results.push(data.results));
  return results;
};

console.log(fetchProducts('computador'));