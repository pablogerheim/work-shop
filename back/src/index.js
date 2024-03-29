import express from 'express';
import winston from 'winston';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import jwt from 'jsonwebtoken';
import { promises } from 'fs';
import loginRepository from './repository/login.repository.js';
import hostInfoRoute from './routes/hostInfo.routes.js';
import loginRoute from './routes/login.routes.js';
import emailRoute from './routes/email.routes.js';
import admRoute from './routes/adm.routes.js';
import { swaggerDocument } from './doc.js';
import validate from './helper/helperList.js';

const { readFile } = promises;

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(
    ({ level, message, label, timestamp }) =>
        `${timestamp} [${label}] ${level}: ${message}`,
);
global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'base.log' }),
    ],
    format: combine(label({ label: 'base' }), timestamp(), myFormat),
});

const corsOptions = {
    credentials: true,
    origin: '*',
    Accept: '*/*',
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static('public'));
// livre
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', hostInfoRoute);
app.use('/login', loginRoute);
// privado
app.use('/email', checkToken, emailRoute);
app.use('/adm', checkToken, admRoute);
app.use('/logout', async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    try {
        if (!token) {
            throw new Error('token missing');
        }
        const blackList = await loginRepository.getBlackList();
        let dateTime = new Date();
        dateTime = JSON.parse(JSON.stringify(dateTime));
        const blacktoken = { token, dateT: dateTime };
        const currentTokens = [];

        blackList.blacktokens.forEach(e => {
            if (validate(e.dateT)) {
                currentTokens.push(e);
            }
        });

        blackList.blacktokens = currentTokens;
        blackList.blacktokens.push(blacktoken);

        await loginRepository.updateBlackList(blackList);

        res.status(200).json({ msg: 'Deslogado com susseso' });
        logger.info(' Logout ');
    } catch (err) {
        next(err);
    }
});

async function checkToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ msg: 'Acesso negado!' }, token);
    }

    const blackList = await loginRepository.getBlackList();

    const blacktoken = blackList.blacktokens.find(t => t.token === token);
    if (blacktoken) {
        if (blacktoken.token === token) {
            return res.status(401).json({ msg: 'Acesso negado!' });
        }
    }

    try {
        const publicKey = await readFile('./public.key', 'utf-8');

        jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        next();
    } catch (err) {
        next(err);
    }
}

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
});

app.listen(3001, () => {
    logger.info('API Started!');
});
