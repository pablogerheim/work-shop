import admService from "../service/adm.service.js";

async function patchProduct(req, res, next) {
    try {
        if (!req.body.id || req.body.togle === null) {
            throw new Error("ID é obrigatório")
        }
        const data = await admService.patchProduct(req.body)
        res.send(JSON.stringify(data))
    } catch (err) {
        next(err);
    }
}

async function deleteProduct(req, res, next) {
    try {
        await admService.deleteProduct(req.params.id)
        res.status(200).json({ msg: "Deleção realizada com sucesso!" });
        logger.info(`DELETE /Product- ID ${req.params.id}`);
    } catch (err) {
        next(err);
    }
}

async function createProduct(req, res, next) {
    try {
        const { name, image, description, url, active, autoexplan } = req.body;
        if (!name == null || image == null || description == null || url == null || active == null || autoexplan == null) {
            return res.status(422).json({ msg: "O Nome, Image, Descrição, url, ativo e autoexplan são obrigatórios!" });
        }
        const product = await admService.createProduct(req.body);
        res.status(200).json({ msg: "Criação realizada com sucesso!", product });
        logger.info(`POST /creat Product - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

async function updateProduct(req, res, next) {
    try {
        const { name, image, description, url, active, autoexplan, productId } = req.body;
        if (!name == null || image == null || description == null || url == null || active == null || autoexplan == null || productId == null) {
            return res.status(422).json({ msg: "O Nome, Image, Descrição, url, ativo, id e autoexplan são obrigatórios!" });
        }
        const product = await admService.updateProduct(req.body);
        res.status(200).json({ msg: "Atualização realizada com sucesso!", product });
        logger.info(`PUT /update Product - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

async function updateAbout(req, res, next) {
    try {
        if (!req.body.about == null) {
            return res.status(422).json({ msg: "O Texto não pode ser Nulo!" });
        }
        const about = await admService.updateAbout(req.body);
        res.status(200).json({ msg: "Atualização realizada com sucesso!", about });
        logger.info(`PUT /update About - ${JSON.stringify(about)}`);
    } catch (err) {
        next(err);
    }
}

async function updateContact(req, res, next) {
    try {
        const { name, email, telephone } = req.body;
        if (!name == null || email == null || telephone == null) {
            return res.status(422).json({ msg: "O nome, email e telefone são obrigatórios!" });
        }
        const contact = await admService.updateContact(req.body);
        res.status(200).json({ msg: "Atualização realizada com sucesso!", contact });
        logger.info(`PUT /update Contact - ${JSON.stringify(contact)}`);
    } catch (err) {
        next(err);
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