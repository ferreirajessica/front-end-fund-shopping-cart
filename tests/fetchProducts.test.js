require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('tests whether fetchProducts is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('tests whether fetch has been called', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  })
  it('tests fetch endpoint to be https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
     await fetchProducts('computador');
     expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it(`tests fetchProducts return to be ${computadorSearch}`, async () => {
    await expect(fetchProducts('computador')).resolves.toEqual(`${computadorSearch}`);
  });
  it('returns error when there are no arguments', async () => {
    await expect(() => fetchProducts()).rejects.toThrow(new Error('You must provide an url'));
  })
  it('creates a module.exports if there is none', () => {
    if (typeof module !== 'undefined') {
      module.exports = {
        fetchProducts,
      };
    }
  });
  it('does nothing if module exports is alreafy created', () => {
    if (typeof module === 'function') {
      return;
    }
  });
});