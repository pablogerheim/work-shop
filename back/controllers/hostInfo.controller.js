import hostInfoServise from "../service/hostInfo.service.js";

async function getProduct(req, res, next) {
    try {
        const data = await hostInfoServise.getProduct(req.params.id)
        res.status(200).send(data);
        logger.info(`GET /Products `);
    } catch (err) {
        next(err);
    }
}

async function getAbout(req, res, next) {
    try {
        const data = await hostInfoServise.getAbout()
        res.status(200).send(data);
        logger.info(`GET /About US`);
    } catch (err) {
        next(err);
    }
}

async function getContact(req, res, next) {
    try {
        const data = await hostInfoServise.getContact()
        res.status(200).send(data);
        logger.info(`GET /Contact`);
    } catch (err) {
        next(err);
    }
}

export default {
    getProduct,
    getAbout,
    getContact
}