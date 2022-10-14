/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createCustomElementWithId = (element, className, innerText, id) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.id = id;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElementWithId(
    'button', 'item__add', 'Adicionar ao carrinho!', id,
    ));
  return section;
};

async function createProductsObject() {
  const results = await fetchProducts('computador');
  const resultsObject = results.map((product) => { 
    const { id, title, thumbnail } = product;
    return { id, title, thumbnail };
  });
 return resultsObject;
}

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
//  */
// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

// /**
//  * Função responsável por criar e retornar um item do carrinho.
//  * @param {Object} product - Objeto do produto.
//  * @param {string} product.id - ID do produto.
//  * @param {string} product.title - Título do produto.
//  * @param {string} product.price - Preço do produto.
//  * @returns {Element} Elemento de um item do carrinho.
//  */
const createCartItemElement = async (event) => {
  const cart = document.getElementsByClassName('cart__items')[0];
  const result = await fetchItem(event.target.id);
  const { id, title, price } = result;
  const li = document.createElement('li');
  cart.appendChild(li);
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  // li.addEventListener('click', cartItemClickListener);  
};

async function displayProducts() {
  const mainSection = document.getElementsByClassName('items')[0];
  const products = await createProductsObject();
  console.log(products);
  products.forEach(({ id, title, thumbnail }) => {
    mainSection.appendChild(createProductItemElement({ id, title, thumbnail }));
    const button = document.getElementById(id);
    button.addEventListener('click', createCartItemElement);
    });
}

displayProducts();

fetchProducts('computador');

window.onload = () => { 
  
};
