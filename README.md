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

## How to test the project

When you run the project, you should be able to load the URL `http://localhost:8080/`, but you shouldn't be able to access `http://localhost:8080/api/hello-world`.

You can log in by sending a post on `http://localhost:8080/login` and send there username and password, both set to _admin_.

```
curl -XPOST -H "Content-Type: application/json" 'http://localhost:8080/login' -d '{"username":"admin","password":"admin"}'
```

You should get back something like :

```
{
"id":1,
"username":"admin",
"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDg3NjM3OTg0LCJleHAiOjE0ODc2NDE1ODR9.1jMwROveQeR64baJOPdZV4SdpmKKVRvgPg0wJX9sHnI"
}
```

Now, when you want to load `http://localhost:8080/api/hello-world` and you send there `Authorization` header with _jwt token_ from the previous response, you should be successful :

```
curl -XGET -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDg3NjM3OTg0LCJleHAiOjE0ODc2NDE1ODR9.1jMwROveQeR64baJOPdZV4SdpmKKVRvgPg0wJX9sHnI' 'http://localhost:8080/api/hello-world'
```
