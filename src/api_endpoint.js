const { fib } = require('./model/fib')

exports.handler = async event => {
    const input = JSON.parse(event.body)
    const result = fib(input.n)
    return {
        statusCode: 200,
        headers: {"content-type": "application/json"},
        body: JSON.stringify(result),
    }
}
