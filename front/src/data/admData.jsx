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


async function loggedToken() {
  const loggedInUser = localStorage.getItem("userToken");
  if (loggedInUser) {
    const foundUser = await JSON.parse(loggedInUser)
    return foundUser
  }
  return false
}

async function loginAdm(user) {
  const userinfo = await axios.post("http://localhost:3001/login/", user)
  return userinfo
}

async function logOut() {
  const {auth} = await loggedToken()
  await axios.post("http://localhost:3001/logout/", {}, {
    headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function getEmail() {

  const {auth}= await loggedToken()
  return await apiEmail.get("/", {
    headers: {
      "Authorization": `Bearer ${ auth}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  }).then(res => res.data)
}

async function getLastId() {
  const {auth}= await loggedToken()
  return await apiLast.get("/", {
    headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  }).then(res => res.data.emailsId)
}

async function deleteEmail(id) {
  const {auth}= await loggedToken()
  await apiEmail.delete(`/${id}`, {
 headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function updateEmail(email) {

  const {auth}= await loggedToken()
  await apiEmail.put("/", email, {
 headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function activeEmail(emailId, active) {
  const {auth}= await loggedToken()
  await apiEmail.patch("/", { emailId, active }, {
 headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function aboutUpdate(aboutText) {
  const {auth}= await loggedToken()
  return await api.put('/about', { about: aboutText }, {
 headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function contactUpdate(obj) {
  const {auth}= await loggedToken()
  return await api.put('/contact', obj, {
 headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function productActiv(obj) {
  const {auth}= await loggedToken()
  return await api.patch('/product', obj, {
 headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function productDelete(id) {
  const {auth}= await loggedToken()
  await api.delete(`/product/${id}`, {
 headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function productCreate(obj) {
  const {auth}= await loggedToken()
  return await axios.post('http://localhost:3001/adm/product', obj, {
 headers: {
      "Authorization": `Bearer ${ auth }`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}

async function productUpdate(obj) {
  const {auth}= await loggedToken()
  return await api.put('/product', obj, {
 headers: {
      "Authorization": `Bearer ${ auth }`,
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
