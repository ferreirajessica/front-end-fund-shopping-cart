const mercadoUrl = (item) => `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

const fetchProducts = async (item) => {
  const results = await fetch(mercadoUrl(item))
  .then((response) => response.json())
  .then((data) => data.results);
  return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
