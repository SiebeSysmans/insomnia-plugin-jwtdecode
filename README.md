# JWT (JSON Web Token) decoder for Insomnia REST Client

This is a plugin for the [Insomnia REST client](https://insomnia.rest/) to decode the **Header** or **Payload** part of a [JWT (JSON WebToken)](https://jwt.io/) and return the value of a claim in that part.

## Decoding Usage

At the time of writing (Insomnia 6.0.2), it is not possible to reference the JWT token from a body attribute of another request directly in the JWT Decode plugin. However, we can add the JWT token as an environment variable and reference that.

![Adding the body attribute empty](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/1.png)

![Adding the body attribute popup](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/2.png)

![Adding the body attribute added](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/3.png)

![Adding the variable empty](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/4.png)

![Adding the variable popup](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/5.png)

![Adding the variable added](https://raw.githubusercontent.com/SiebeSysmans/insomnia-plugin-jwtdecode/master/screenshot/6.png)

# License

    MIT License

    Copyright (c) 2018 Siebe Sysmans

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
