const productUrl = (item) => `https://api.mercadolibre.com/items/${item}`;

const fetchItem = async (item) => {
  const result = await fetch(productUrl(item))
  .then((response) => response.json())
  .then((data) => data);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
