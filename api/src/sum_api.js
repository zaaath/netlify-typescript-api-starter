const sum = require('./model/sum')

exports.handler = async event => {
    const input = JSON.parse(event.body)
    const result = sum(input.a, input.b)
    return {
        statusCode: 200,
        headers: {"content-type": "application/json"},
        body: JSON.stringify(result),
    }
}
