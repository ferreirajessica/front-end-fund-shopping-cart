const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems',  () => {
  it('saves items to local storage', () => {
    saveCartItems('MLB1937076326');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('is called with arguments cartItems and saveCartItems', () => {
    saveCartItems(cartItem);
    expect(localStorage.setItem()).toHaveBeenCalledWith('cartItems', cartItem);
  });
 });
