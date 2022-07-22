import emailRepository from "../repository/email.repository.js"

async function getEmail() {
    return await emailRepository.print()

}

async function deleteEmail(id) {
    await emailRepository.exclude(id)
}

async function createEmail(body) {
    return await emailRepository.create(body)
}

async function updateEmail(body) {
    return await emailRepository.update(body)
}

export default {
    getEmail,
    deleteEmail,
    createEmail,
    updateEmail
}