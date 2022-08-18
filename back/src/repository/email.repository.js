import Email from "../models/email.model.js"
import mongconnect from "../config/MongoDBconnect.js"

async function printLastId() {
    const conn = mongconnect();
    try {
        await conn.connect()
        return await conn.db("market").collection('lastId').findOne({ title: 'LastId' })
    } catch (err) {
        throw err
    } finally {
        await conn.close()
    }
}

async function updateLastId(id) {
    const conn = mongconnect();
    try {
        await conn.connect()
        return await conn.db("market").collection('lastId').findOneAndUpdate({ title: 'LastId' }, { $set: { lastId: id } })
    } catch (err) {
        throw err
    } finally {
        await conn.close()
    }
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
    patch,
    printLastId
}