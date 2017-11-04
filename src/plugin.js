const base64 = require('base-64')

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
            displayName: 'Claim',
            type: 'string'
        },
    ],

    async run (context, jwt, part, claim) {
        const jwtParts = jwt.split('.')

        if(part === 'header') {
            return decode(jwtParts[0], claim)
        } else if(part === 'payload') {
            return decode(jwtParts[1], claim)
        } else if(part === 'signature') {
            throw new Error(`Decoding JWT signature is not supported`)
        } else {
            throw new Error(`Unknow JWT part: ${part}`)
        }
        
    }
}];

function decode(jwtPart, claim) {
    let base64DecodedPart
    let jsonParsedPart
    let claimResult

    try {
        base64DecodedPart = base64.decode(jwtPart);
    } catch (error) {
        throw new Error(`JWT cannot be decoded (Base64 error): ${error.message}`)
    }

    try {
        jsonParsedPart = JSON.parse(base64DecodedPart);
    } catch (error) {
        throw new Error(`JWT cannot be decoded (JSON error): ${error.message}`)
    }

    claimResult = jsonParsedPart[claim]

    if(claimResult === undefined && claim.length > 0) {
        throw new Error(`Claim not found in JWT: ${claim}`)
    }

    return claimResult
}