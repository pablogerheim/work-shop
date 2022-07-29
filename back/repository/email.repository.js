import Email from "../models/email.model.js"
import { promises } from "fs";

async function updateLastId(id) {
    await promises.writeFile("db.json", JSON.stringify({ emailsId: id }, null, 2))
}

async function create(email) {
    try {
        const newEmail = await Email.create(email)
        await updateLastId(newEmail.dataValues.emailId)
        return newEmail
    } catch (err) {
        throw err
    }
}

async function update(email) {
    try {
        await Email.update(email, {
            where: {
                emailId: email.emailId
            }
        })
        return await print(email.emailId)
    } catch (err) {
        throw err
    }
}

async function exclude(id) {
    try {
        return await Email.destroy({
            where: {
                emailId: id
            }
        })
    } catch (err) {
        throw err
    }
}

async function print(id) {
    try {
        if (id) {
            return await Email.findByPk(id)
        } else {
            return await Email.findAll()
        }
    } catch (err) {
        throw err
    }
}

async function patch({ emailId, active }) {
    try {
        await Email.update({ active }, {
            where: {
                emailId
            }
        })
        return await print(emailId)
    } catch (err) {
        throw err
    }
}

export default {
    create,
    update,
    exclude,
    print,
    patch
}