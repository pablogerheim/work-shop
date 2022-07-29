import axios from "axios"

const apiEmail = axios.create({
  baseURL: "http://localhost:3001/email",
});

const apiClient = axios.create({
  baseURL: "http://localhost:3001/",
});

async function createEmail(email) {
 await apiEmail.post("/", email)
}

async function about() {
  const aboutText = await apiClient('/about')
  return aboutText.data.about
}

async function contact() {
  const contactText = await apiClient('/contact')
  return contactText.data
}

async function products() {
  const productsObj = await apiClient('/product')
  return productsObj.data
}

export {
  apiEmail,
  about,
  contact,
  products,
  createEmail
}
