function difDataHora(params) {
    return params.split(/[a-zA-Z]/g)
}

function difTime(p1, p2) {
    return p1 - p2
}

function validate(blackDate) {
    let date = new Date
    date = JSON.parse(JSON.stringify(date))
    let blackArr = difDataHora(blackDate.toString().slice(0, 19))
    let arr = difDataHora(date.toString().slice(0, 19))
    let timeH = difTime(parseInt(arr[1].slice(0, 5).replace(':', "")), parseInt(blackArr[1].slice(0, 5).replace(':', "")))

    let By = arr[0].split("-")
    let y = blackArr[0].split("-")

    let year = difTime(parseInt(By[0]), parseInt(y[0]))
    let month = difTime(parseInt(By[1]), parseInt(y[1]))
    let day = difTime(parseInt(By[2]), parseInt(y[2]))

    if (year !== 0 || month !== 0 || day !== 0) { return false }
    if (timeH < 60) { return true } else { return false }
}

export default validate