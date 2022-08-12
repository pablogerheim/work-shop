import About from "../models/about.model.js"
import Contact from "../models/contact.model.js"
import Products from "../models/products.model.js"

async function patchProduct({ id, active }) {
    try {
        await Products.update({ active: active }, {
            where: {
                productId: id
            }
        })
    } catch (err) {
        throw err
    }
}

async function deleteProduct(id) {
    try {
        return await Products.destroy({
            where: {
                productId: id
            }
        })
    } catch (err) {
        throw err
    }
}

async function createProduct(product) {
    try {
        return await Products.create(product)
    } catch (err) {
        throw err
    }
}

async function updateProduct(product) {
    try {
        await Products.update(product, {
            where: {
                productId: product.productId
            }
        })
    } catch (err) {
        throw err
    }
}

async function updateAbout(about) {
    try {
        await About.update(about, {
            where: {
                aboutId: 1
            }
        })
    } catch (err) {
        throw err
    }
}

async function updateContact(contact) {
    try {
        await Contact.update(contact, {
            where: {
                contactId: 1
            }
        })
    } catch (err) {
        throw err
    }
}



export default {
    patchProduct,
    deleteProduct,
    createProduct,
    updateProduct,
    updateAbout,
    updateContact
}