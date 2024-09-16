# Alcodex Assesment

## Tech Used

- `React JS` : A JavaScript library for building user interfaces (UIs).
  Employs components for reusable and maintainable code.
  Focuses on declarative programming (describe what, not how).
  Utilizes a virtual DOM for efficient updates.

- `TypeScript` : A superset of JavaScript with optional static typing.
  Enhances code clarity, catches errors early, and provides better tooling support (autocompletion, type checking).
  Transpiles to plain JavaScript compatible with most browsers.

- `Axios` : A popular Promise-based HTTP client for JavaScript.
  Simplifies asynchronous HTTP requests (GET, POST, PUT, DELETE, etc.) to backend APIs.
  Handles data serialization, response parsing, and error handling.
- `Express.js` :
  A Node.js framework for building web applications and APIs.
  Offers a minimalist and flexible approach.
  Provides features like routing, middleware, and templating engines for dynamic content generation.
  Commonly used to build RESTful APIs that React applications can consume.
- `Node.js` :
  A JavaScript runtime environment that allows executing JavaScript code outside a web browser.
  Enables building server-side applications and web servers using JavaScript.
  Well-suited for real-time and event-driven applications.
- `Mongoose`:
  An Object Data Modeling (ODM) library for MongoDB in Node.js.
  Provides a schema-based approach to define data structures for your application's models.
  Simplifies interacting with the MongoDB database, including CRUD operations (Create, Read, Update, Delete).
- `JSONWEBTOKEN`:
  A middleware library for Express.js that simplifies authentication using JSON Web Tokens (JWT).
  Enables secure user authentication and authorization by managing token generation, verification, and attaching user information to requests.

## Run Locally

Clone the project

bash

```
git clone https://github.com/Sreejith-10/alcodex-assesment.git
```

Go to the project directory

bash

```
cd my-project
```

Client side installation

bash

```
cd client
npm install
npm run dev
```

Sever side installation

bash

```
cd server
npm install
npm start
```

Now the project will be running on http://localhost:5173

## ENVIRONMENT VARIABLE SETUP

Setup necesseary environment variables in the server folder

- PORT :- port for the server
- MONGO_URI :- mongodb url
- JWTSERCRET :- secret for jwt
- CLIENT :- front end url

## API Reference

#### Register user

```
http
POST /api/auth/signup
```

| Parameter | Type   | Description                           |
| :-------- | :----- | :------------------------------------ |
| name      | string | _Required_. name of the user          |
| email     | string | _Required_. email of the user         |
| passowrd  | string | _Required_. passoword for the account |

#### Login user

```
http
POST /api/auth/login
```

| Parameter | Type   | Description                          |
| :-------- | :----- | :----------------------------------- |
| email     | string | _Required_. email of the account     |
| passowrd  | string | _Required_. passoword of the account |
