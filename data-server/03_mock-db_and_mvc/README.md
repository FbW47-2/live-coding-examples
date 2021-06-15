# Mocking Databases and Introduction of Model-View-Controller

Mock:
- Mock database for quick prototyping (brief introduction)
- Reading and writing to json file: `lowdb`
- Setting up `lowdb`: `data` directory, initial setup

Controller:
- MVC Concepts: C is for controller (brief definition)
- Attaching controllers to our app: `app.get(<path>, <controller>)`
- REST I: `GET` is for reading data
- Sending responses: `res.send(<string>)`, `res.json(<object>)`
- Project Organization I: The `controllers` directory

Request:
- The request object: `req`
- Receiving JSON requests: `app.post(<path>, <controller>)`, `req.body`
- REST II: `POST` is for creating data

## Lowdb

https://www.npmjs.com/package/lowdb

## Express
### .json()
http://expressjs.com/en/api.html#express.json

### Routing
https://expressjs.com/en/starter/basic-routing.html

https://expressjs.com/en/guide/routing.html

## Model View Controller

https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

https://de.wikipedia.org/wiki/Model_View_Controller

https://codingstatus.com/express-mvc-structure/
