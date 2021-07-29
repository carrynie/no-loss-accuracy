/*
 * @LastEditors: carrynie
 * @LastEditTime: 2021-07-29 16:02:59
 * @FilePath: \no-loss-accuracy\index.js
 * @Description: Add, subtract, multiply and divide without loss of accuracy
 */

const maxDigits = (...args) => {
    if(!args.length) {
        throw new Error('The parameter cannot be empty')
    }
    
    return Math.max(...args.map(item => {
        const itemStr = String(item)

        if(itemStr.includes('.')) {
            return itemStr.split('.')[1].length
        }

        return 0
    }))
}

const formatResult = (number, digits) => {
    if(isNaN(number)) {
        throw new Error('The result is NaN')
    }

    return +`${number > 0 ? '' : '-'}${String(Math.abs(number)).slice(0, -digits) || '0'}.${String(Math.abs(number)).slice(-digits)}`
}

export const add = (...args) => {
    const digits = maxDigits(args)

    const sum = args.map(item => item*(10**digits)).reduce((a, b) => {
        return a + b
    })

    return formatResult(sum, digits)
}

export const sub = (...args) => {
    const digits = maxDigits(args)

    const sum = args.map(item => item*(10**digits)).reduce((a, b) => {
        return a - b
    })

    return formatResult(sum, digits)
}

export const mult = (...args) => {
    const digits = maxDigits(args)

    const sum = args.map(item => item*(10**digits)).reduce((a, b) => {
        return a * b
    })

    console.log('digits:'+digits, 'length:'+ args.length)

    return sum/(10**(digits*args.length))
}

export const div = (dividend, ...args) => {
    const divisor = mult(...args)
    const digits = maxDigits(dividend, divisor)

    return (dividend*(10**digits))/(divisor*(10**digits))
}