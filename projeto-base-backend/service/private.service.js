import baseRepository from "../repository/private.repository.js"

async function historyMonth(month) {
    const data = await baseRepository.readFileFunction()
    let monthArr = data.despesas.filter(despesa => despesa.mes === month)
    return monthArr.sort((a, b) => a.dia - b.dia)
}

async function deleteSpend(id) {
    await baseRepository.deleteSpend(id)
}

async function createSpend(descricao, categoria, valor, mes, dia) {
    return await createSpend(descricao, categoria, valor, mes, dia)
}

async function updateSpend(descricao, categoria, valor, mes, dia, id) {
    return await updateSpend(descricao, categoria, valor, mes, dia, id)
}

export default {
    historyMonth,
    deleteSpend,
    createSpend,
    updateSpend
}