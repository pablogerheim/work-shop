import axios from 'axios';

const apiEmail = axios.create({
  baseURL: 'http://localhost:3001/login',
});

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/',
});

async function createEmail(email) {
  await apiEmail.post('/email', email);
}

async function about() {
  const aboutText = await apiClient('/about');
  return aboutText.data.about;
}

async function contact() {
  const contactText = await apiClient('/contact');
  return contactText.data;
}

async function products(id) {
  if (id) { return await apiClient(`/product/${id}`).then((r) => r.data); }
  const productsObj = await apiClient('/product');
  return productsObj.data;
}

export {
  about,
  contact,
  products,
  createEmail,
};
