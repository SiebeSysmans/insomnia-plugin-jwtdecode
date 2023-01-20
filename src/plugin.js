const jsonPath = require('jsonpath')
const jwtDecode = require('jwt-decode')

module.exports.templateTags = [{
    name: 'jwtdecode',
    displayName: 'JWT Decode',
    description: 'decode and return a claim out of the header or payload',

    args: [
        {
            displayName: 'Token',
            type: 'string'
        },
        {
            displayName: 'Part',
            type: 'enum',
            options: [
                {displayName: 'Header', value: 'header'},
                {displayName: 'Payload', value: 'payload'}
            ]
        },
        {
            displayName: 'Claim (JSONPath)',
            type: 'string'
        },
    ],

    async run (context, jwt, part, claim) {
        if (part === 'header') {
            return decode(jwt, {header: true}, claim)
        } else if (part === 'payload') {
            return decode(jwt, {header: false}, claim)
        } else if (part === 'signature') {
            throw new Error(`Decoding JWT signature is not supported`)
        } else {
            throw new Error(`Unknown JWT part: ${part}`)
        }

    }
}]

function decode(jwt, options, claim) {
    let result

    try {
        result = jwtDecode(jwt, options)
    } catch (error) {
        throw new Error(`JWT cannot be decoded (JSON error): ${error.message}`)
    }

    if (claim.length > 0) {
        try {
            result = jsonPath.query(result, claim)[0]
        } catch (error) {
          throw new Error(`Cannot parse JWT claim (JSON error): ${error.message}`)
        }
    }

    if(result === undefined && claim.length > 0) {
        throw new Error(`Claim not found in JWT: ${claim}`)
    }

    if (typeof result === 'object' && result !== null) {
      result = JSON.stringify(result)
    }

    return result
}
