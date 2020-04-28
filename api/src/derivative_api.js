const { derivative } = require('./model/derivative')

exports.handler = async event => {
    const input = JSON.parse(event.body)
    const result = derivative(input.expr)
    return {
        statusCode: 200,
        headers: {"content-type": "application/json"},
        body: JSON.stringify(result),
    }
}
