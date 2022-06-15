import { promises as fs } from "fs"

const { readFile, writeFile } = fs

async function readFileFunction() {
    return JSON.parse(await readFile("db.json"))
}

async function writeFileFunction(obj) {
    await writeFile("db.json", JSON.stringify(obj, null, 2))
}

async function deleteSpend(id) {
    let data = await readFileFunction()
    data.despesas = data.despesas.filter(despesa => despesa.id !== id)
    await writeFileFunction(data)
}

async function createSpend(descricao, categoria, valor, mes, dia) {
    valor = parseInt(valor)
    let data = await baseRepository.readFileFunction()

    let spend = {
        "id": data.nextId,
        "descricao": descricao,
        "categoria": categoria,
        "valor": valor,
        "mes": mes,
        "dia": dia
    }

    data.nextId++
        data.despesas.push(spend)

    await baseRepository.writeFileFunction(data)
    return spend
}

async function updateSpend(descricao, categoria, valor, mes, dia, id) {
    valor = parseInt(valor)
    let data = await baseRepository.readFileFunction()

    let spend = {
        "id": id,
        "descricao": descricao,
        "categoria": categoria,
        "valor": valor,
        "mes": mes,
        "dia": dia
    }

    data.despesas.map((element, i) => {
        if (element.id == id) {
            data.despesas[i] = spend
        }
    });

    await baseRepository.writeFileFunction(data)
    return spend
}

export default {
    readFileFunction,
    writeFileFunction,
    deleteSpend,
    createSpend,
    updateSpend
}