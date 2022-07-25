import hostInfoRepository from "../repository/hostInfo.repository.js";

async function getProduct() {
    return await hostInfoRepository.printProducts()
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