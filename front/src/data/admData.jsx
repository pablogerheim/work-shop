import axios from "axios"

const headers = {
 // "Authorization": `Bearer ${token}`
  "Content-Type": "application/json; charset = utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
};

const api = axios.create({
  baseURL: "http://localhost:3001/adm",
});

const apiEmail = axios.create({
  baseURL: "http://localhost:3001/email",
});

async function getEmail() {
    return await apiEmail.get("/").then(res => res.data )
}

async function deleteEmail(id) {
  await apiEmail.delete(`/${id}`)
}

async function updateEmail(email) {
  await apiEmail.put("/", email)
}

async function activeEmail(emailId, active) {
  await apiEmail.patch("/", {emailId, active})
}


async function aboutUpdate(aboutText) {
  return await api.put('/about', {about : aboutText}, { headers })
}

async function contactUpdate(obj) {
  return await api.put('/contact', obj, { headers })
}

async function productActiv(obj) {
  return await api.patch('/product', obj, { headers })
}

async function productDelete(id) {
  await api.delete(`/product/${id}`, { headers })
}

async function productCreate(obj) {
  return await axios.post('http://localhost:3001/adm/product', obj, { headers })
   }

async function productUpdate(obj) {
  return await api.put('/product', obj, { headers })
}


export {
  aboutUpdate,
  contactUpdate,
  productActiv,
  productDelete,
  productCreate,
  productUpdate,
  getEmail,
  deleteEmail,
  updateEmail,
  activeEmail
}
