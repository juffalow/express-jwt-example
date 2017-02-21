# Express.js with JWT example

This is an example project to show how to create login route and some other
route that is protected - could be called only if valid JWT token is provided.

Everything is well tested with [mocha](https://mochajs.org), [chai](http://chaijs.com), [sinon](http://sinonjs.org) and [supertest](https://github.com/visionmedia/supertest).

## Dependencies

* express
* body-parser
* jsonwebtoken
* chai
* mocha
* sinon
* supertest

## Scripts

`npm run start`

`npm run test`

## How to run the project

Install dependencies :

```
yarn install

# or

npm install
```

Edit `config.example.js` and save it as `config.js` :

```
module.exports = {
    port: 8080,
    jwtSecret: 'your jwt secret'
};
```

Run tests :

```
npm run test
```

If everything is OK, run the project :

```
npm start
```
