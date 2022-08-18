import baseRepository from "../repository/private.repository.js"

async function getProduct() {
    return await baseRepository.readFileFunction()
}

export default {
    getProduct,
}