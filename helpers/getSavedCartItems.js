const getSavedCartItems = () => {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  return items;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
