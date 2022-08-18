import emailRepository from "../repository/email.repository.js"

async function getEmail() {
    const emailData = await emailRepository.print()
    return emailData.map((e) => e.dataValues).sort((a, b) => {
        if (a.name < b.name)
            return -1

        if (a.name > b.name)
            return 1

        return 0
    })
}

async function deleteEmail(id) {
    await emailRepository.exclude(id)
}

async function createEmail(body) {
    body.active = true
    return await emailRepository.create(body)
}

async function updateEmail(body) {
    return await emailRepository.update(body)
}

async function patchEmail(body) {
    return await emailRepository.patch(body)
}

async function printLastId() {
    return await emailRepository.printLastId()
}

export default {
    getEmail,
    deleteEmail,
    createEmail,
    updateEmail,
    patchEmail,
    printLastId
}