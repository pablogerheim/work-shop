import axios from "axios"

const apiEmail = axios.create({
  baseURL: "http://localhost:3001/email",
});


export {
 apiEmail,
}
