# JWT (JSON Web Token) decoder for Insomnia REST Client

This is a plugin for the [Insomnia REST client](https://insomnia.rest/) to decode the **Header** or **Payload** part of a [JWT (JSON WebToken)](https://jwt.io/), return the value of a claim in that part and use it as a dynamic variable.

**This plugin is not for encoding,constructing,validating, ... or other usages besides decoding JWT tokens.**

## Decoding Usage

At the time of writing (Insomnia 2022.7.1), it is not possible to reference the JWT token from a body attribute of another request directly in the JWT Decode plugin. However, we can add the JWT token as an environment variable and reference that.

![Referencing the JWT token from another request](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/1.png)

![Adding the variable empty](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/2.png)

![Adding the variable popup](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/3.png)

![Adding the variable added](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/4.png)

# License

[MIT](LICENSE)
