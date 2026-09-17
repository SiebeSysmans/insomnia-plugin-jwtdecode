# ![Plugin Icon](assets/icon/icon.svg) JWT decoder for Insomnia REST Client

This is a plugin for the [Insomnia REST client](https://insomnia.rest/) to decode the **Header** or **Payload** part of a [JWT (JSON Web Token)](https://jwt.io/), return the value of a claim in that part and use it as a dynamic variable.

**This plugin is not for encoding,constructing,validating, ... or other usages besides decoding JSON Web Tokens.**

## Decoding Example Usage

> [!NOTE]  
> At the time of writing (Insomnia 13.2.0), it is not possible to reference the JWT from a body attribute of another request directly in the JWT Decode plugin. However, we can add the JWT as an environment variable and reference that.

In this example we will be using following JWT:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
```

With body:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
```
### 1. Add the body response of a request to the environment variables.

![Add the body response of a request to the environment variables.](assets/screenshot/1.png)

### 2. Add the plugin where the JWT needs to be decoded.

![Add the plugin where the JWT needs to be decoded.](assets/screenshot/2.png)

### 3. Configure the plugin.

![Configure the plugin.](assets/screenshot/3.png)

### 4. The JWT is now referenced in the request.

![The JWT is now referenced in the request.](assets/screenshot/4.png)

# License

[MIT](LICENSE)
