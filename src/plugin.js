const jwtDecode = require('jwt-decode');

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
        if (part === 'header') {
            return decode(jwt, {header: true}, claim)
        } else if (part === 'payload') {
            return decode(jwt, {header: false}, claim)
        } else if (part === 'signature') {
            throw new Error(`Decoding JWT signature is not supported`)
        } else {
            throw new Error(`Unknow JWT part: ${part}`)
        }
        
    }
}];

function decode(jwtPart, options, claim) {
    let jsonParsedPart;
    let claimResult;

    try {
        jsonParsedPart = jwtDecode(jwtPart, options);
    } catch (error) {
        throw new Error(`JWT cannot be decoded (JSON error): ${error.message}`)
    }

    claimResult = jsonParsedPart[claim];

    if (claimResult === undefined && claim.length > 0) {
        throw new Error(`Claim not found in JWT: ${claim}`)
    }

    return claimResult
}
