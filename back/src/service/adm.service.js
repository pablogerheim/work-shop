import admRepository from '../repository/adm.repository.js';

async function patchProduct(body) {
    return await admRepository.patchProduct(body);
}

async function deleteProduct(id) {
    return await admRepository.deleteProduct(id);
}

async function createProduct(product) {
    return await admRepository.createProduct(product);
}

async function updateProduct(product) {
    return await admRepository.updateProduct(product);
}

async function updateAbout(about) {
    return await admRepository.updateAbout(about);
}

async function updateContact(contact) {
    return await admRepository.updateContact(contact);
}

export default {
    patchProduct,
    deleteProduct,
    createProduct,
    updateProduct,
    updateAbout,
    updateContact,
};
