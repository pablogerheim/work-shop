import express from "express";
import winston from "winston";
import hostInfoRepository from "./repository/hostInfo.repository.js";
import loginRoute from "./routes/login.routes.js"
import emailRoute from "./routes/email.routes.js"
import admRoute from "./routes/adm.routes.js"
import hostInfoRoute from "./routes/hostInfo.routes.js"
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./doc.js"
import jwt from 'jsonwebtoken'
import validate from "./helper/helperList.js";
import { promises } from "fs";

const { readFile, writeFile } = promises;

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({ filename: "base.log" })
    ],
    format: combine(
        label({ label: "base" }),
        timestamp(),
        myFormat
    )
});

const corsOptions = {
    credentials: true,
    origin: '*',
    Accept: "*/*"
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static("public"));
//livre
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", hostInfoRoute)
app.use("/login", loginRoute)
    //privado
app.use("/email", checkToken, emailRoute)
app.use("/adm", checkToken, admRoute);
app.use("/lastId", checkToken, hostInfoRepository.printLastId)
app.use("/logout", async(req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    try {
        if (!token) { throw new Error('token missing') }
        let blackList = JSON.parse(await readFile("blackList.json"))
        let blacktoken = { token, date: new Date }
        let currentTokens = []

        blackList.blacktokens.forEach((e, i) => {
            if (validate(e.date)) { currentTokens.push(e) }
        });

        blackList.blacktokens = currentTokens
        blackList.blacktokens.push(blacktoken)
        await writeFile("blackList.json", JSON.stringify(blackList, null, 2))

        res.status(200).json({ msg: "Deslogado com susseso" })
        logger.info(` Logout `);
    } catch (err) {
        next(err);
    }
})

async function checkToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) { return res.status(401).json({ msg: "Acesso negado!" }, token) }
    let blackList = JSON.parse(await readFile("blackList.json"))
    let blacktoken = blackList.blacktokens.find(t => t.token === token)
    if (blacktoken) { if (blacktoken.token === token) { return res.status(401).json({ msg: "Acesso negado!" }) } }
    try {

        const publicKey = await readFile('./public.key', 'utf-8')

        jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        next();
    } catch (err) {
        res.status(400).json({ msg: "O Token é inválido!" }, token);
    }
}

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ error: err.message })
})

app.listen(3001, () => {
    logger.info("API Started!");
});