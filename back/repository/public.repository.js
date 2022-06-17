import { promises as fs } from "fs"

const { readFile, writeFile } = fs

async function readFileUser() {
    return JSON.parse(await readFile("users.json"))
}

async function writeFileUser(obj) {
    await writeFile("users.json", JSON.stringify(obj, null, 2))
}

export default {
    readFileUser,
    writeFileUser
}