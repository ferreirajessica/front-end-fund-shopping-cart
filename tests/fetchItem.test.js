require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('checks whether fecthItem is a function', () => {
  expect(typeof fetchItem).toBe('function');
});
it('tests whether fetch has been called', async () => {
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalledTimes(1);
})
it('checks endopoint of fetchItem to be "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
});
it(`checks whether fetchItem returns ${item}`, async () => {
  await fetchItem('MLB1615760527');
  expect(fetchItem('MLB1615760527')).resolves.toEqual(item);
});
it('checks fetchItem with zero arguments to throw "You must provide an url"', async () => {
  await fetchItem();
  expect(fetchItem()).rejects.toThrow(new Error('You must provide an url'));
});
});