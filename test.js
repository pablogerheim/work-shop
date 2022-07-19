const main = (params) => {
    const factorial = []

    for (let i = 1; i < 10; i++) {
        let result = 1

        if (i == 1) { factorial.push(result) }
        let last = 0
        for (let j = i; j > 0; j--) {
            if (j == i) {
                last = j
            } else {
                last *= j
            }
        }
        result *= last
        factorial.push(result)
    }

    const valueT = factorial.reduce((n1, n2) => n1 + n2, 0)

    return 500000 - valueT
}
console.log(main())

// 16 resolver 
// 18 --
// 27 de junho