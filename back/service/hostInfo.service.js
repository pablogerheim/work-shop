import hostInfoRepository from "../repository/hostInfo.repository.js";

async function getProduct() {
    const products = await hostInfoRepository.printProducts()
    return products.map((e) => e.dataValues).sort((a, b) => {
        if (a.name < b.name)
            return -1

        if (a.name > b.name)
            return 1

        return 0
    })
}

async function getAbout() {
    const data = await hostInfoRepository.printAbout()
    return ({
        "about": data.about,
    })
}

async function getContact() {
    const data = await hostInfoRepository.printContact()
    return ({
        "name": data.name,
        "email": data.email,
        "telephone": data.telephone
    })
}

export default {
    getProduct,
    getAbout,
    getContact
}