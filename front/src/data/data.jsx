let currentIuser

async function signInEndpoint(email, password) {
  let helperPromise = await fetch(`http://localhost:3001/login`, {
    credentials: "include",
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
  currentIuser = helperPromise
  return helperPromise
}

async function createEventEndpoint(descricao, categoria, valor, mes, dia){
  let { token } = currentIuser
  await fetch(`http://localhost:3001/private`, {
    credentials: "include",
    method: "POST",
    mode: "cors",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({ descricao, categoria, valor, mes, dia }),
  }).then(handleResponse);
}

async function updateEventEndpoint(descricao, categoria, valor, mes, dia, id) {
  let { token } = currentIuser
  console.log({ descricao, categoria, valor, mes, dia, id })
  await fetch(`http://localhost:3001/private`, {
    credentials: "include",
    method: "PUT",
    mode: "cors",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({ descricao, categoria, valor, mes, dia, id }),
  }).then(handleResponse);
}

function deleteEventEndpoint(eventId) {
  let { token } = currentIuser
  return fetch(`http://localhost:3001/private/${eventId}`, {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  }).then(handleResponse);
}

function handleResponse(resp) {
  if (resp.ok) {
    return resp.json()
  } else {
    throw new Error(resp.statusText);
  }
}

async function api(selecAno, selecMes) {
  let { id, token } = currentIuser
  let url = `http://localhost:3001/private/month/${id}/${selecAno}-${selecMes}`;
  let response = await fetch(url, {
    credentials: "include",
    method: "GET",
    mode: "cors",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  }).then(handleResponse);
  return response
}

function getUserEndpoint() {
  return setTimeout(() => {
    return currentIuser
  }, 1000);
}

async function signOutEndpoint() {
  let { token } = currentIuser
  let url = `http://localhost:3001/singout`;
  let response = await fetch(url, {
    credentials: "include",
    method: "GET",
    mode: "cors",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset = utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    }
  })
  return response
}

const arrMes = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

export {
  arrMes,
  api,
  signInEndpoint,
  createEventEndpoint,
  updateEventEndpoint,
  deleteEventEndpoint,
  getUserEndpoint,
  signOutEndpoint,
}
