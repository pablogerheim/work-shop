import emailService from '../service/email.service.js';

async function getEmail(req, res, next) {
    try {
        const data = await emailService.getEmail(req.params.id);
        res.status(200).send(data);
        logger.info('GET /Email');
    } catch (err) {
        next(err);
    }
}

async function deleteEmail(req, res, next) {
    try {
        const id = parseInt(req.params.id, radix);
        await emailService.deleteEmail(id);
        res.status(200).json({ msg: 'Deleção realizada com sucesso!' });
        logger.info(`DELETE /Email - ID ${id}`);
    } catch (err) {
        next(err);
    }
}

async function createEmail(req, res, next) {
    try {
        const { name, email } = req.body;
        if (!name == null || email == null) {
            return res
                .status(422)
                .json({ msg: 'O nome e email são obrigatórios!' });
        }
        const Email = await emailService.createEmail(req.body);
        res.status(200).json({ msg: 'Criação realizada com sucesso!' });
        logger.info(`POST /creat Email - ${JSON.stringify(Email)}`);
    } catch (err) {
        next(err);
    }
}

async function updateEmail(req, res, next) {
    try {
        const { name, email, emailId } = req.body;
        if (!name == null || email == null || emailId == null) {
            return res
                .status(422)
                .json({ msg: 'O nome, email e id são obrigatórios!' });
        }
        const Email = await emailService.updateEmail(req.body);
        res.status(200).json({
            msg: 'Atualização realizada com sucesso!',
            Email,
        });
        logger.info(`PUT /update Email - ${JSON.stringify(Email)}`);
    } catch (err) {
        res.status(500).json({ msg: 'error' });
    }
}

async function patchEmail(req, res, next) {
    try {
        const { active, emailId } = req.body;
        if (!emailId == null || active === null) {
            return res
                .status(422)
                .json({ msg: 'O estado e o id são obrigatórios!' });
        }
        const Email = await emailService.patchEmail(req.body);
        res.status(200).json({
            msg: 'Atualização realizada com sucesso!',
            Email,
        });
        logger.info(`PATCH /update Email - ${JSON.stringify(Email)}`);
    } catch (err) {
        next(err);
    }
}

async function getLastId(req, res, next) {
    try {
        const data = await emailService.printLastId();
        logger.info(`GET /LastId ${data.lastId}`);
        res.status(200).json({ lastId: data.lastId });
    } catch (err) {
        next(err);
    }
}

export default {
    getEmail,
    deleteEmail,
    createEmail,
    updateEmail,
    patchEmail,
    getLastId,
};
