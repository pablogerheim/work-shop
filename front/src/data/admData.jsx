import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3001/adm",
});

const apiEmail = axios.create({
  baseURL: "http://localhost:3001/email",
});

const apiLast = axios.create({
  baseURL: "http://localhost:3001/lastId",
});

async function loginAdm(user) {
  const userinfo = await axios.post("http://localhost:3001/login/", user)
  return userinfo
}

async function loggedToken() {
  const loggedInUser = localStorage.getItem("userToken");
  if (!loggedInUser) {
    const foundUser = await JSON.parse(JSON.stringify(loggedInUser))
    return foundUser
  }
  return false
}

async function logOut() {

  await axios.post("http://localhost:3001/logout/", {}, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function getEmail() {
  const token = await loggedToken()
 // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTk0NjE5NjAsImV4cCI6MTY1OTQ2NTU2MH0.hWBjxqKqXKNLBQYDZb2qW-TF8bnmcCVybdBYicaD16o"
  return await apiEmail.get("/", {
    headers: {
      "Authorization": `Bearer ${ token}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  }).then(res => res.data)
}

async function getLastId() {
  return await apiLast.get("/", {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  }).then(res => res.data.emailsId)
}

async function deleteEmail(id) {
  await apiEmail.delete(`/${id}`, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function updateEmail(email) {
  await apiEmail.put("/", email, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function activeEmail(emailId, active) {
  await apiEmail.patch("/", { emailId, active }, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function aboutUpdate(aboutText) {
  return await api.put('/about', { about: aboutText }, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function contactUpdate(obj) {
  return await api.put('/contact', obj, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function productActiv(obj) {
  return await api.patch('/product', obj, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function productDelete(id) {
  await api.delete(`/product/${id}`, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function productCreate(obj) {
  return await axios.post('http://localhost:3001/adm/product', obj, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function productUpdate(obj) {
  return await api.put('/product', obj, {

    headers: {
      "Authorization": `Bearer ${ await loggedToken()}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
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
  activeEmail,
  getLastId,
  loginAdm,
  logOut,
  loggedToken
}
