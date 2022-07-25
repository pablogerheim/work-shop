import About from "../models/about.model.js"
import Contact from "../models/contact.model.js"
import Products from "../models/products.model.js"

async function printProducts() {
    try {
        return await Products.findAll()
    } catch (err) {
        throw err
    }
}

async function printAbout() {
    try {
        return await About.findByPk(1)
    } catch (err) {
        throw err
    }
}

async function printContact() {
    console.log("poi")
    try {
        return await Contact.findByPk(1)
    } catch (err) {
        throw err
    }
}

export default {
    printProducts,
    printAbout,
    printContact
}