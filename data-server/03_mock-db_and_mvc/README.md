# Mocking Databases and Introduction of Model-View-Controller

Mock:
- Mock database for quick prototyping (brief introduction)
- Reading and writing to json file: `lowdb`
- Setting up `lowdb`: `data` directory, initial setup

app.get(PATH, () => {...});

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

## Tool "Umlet"
Genutzt um die Datei `WebApp-Architektur.uxf` zu erstellen.
Used to create/view the file `WebApp-Architektur.uxf`.

## Lowdb

ENG: https://www.npmjs.com/package/lowdb

## Express
### .json()
ENG: http://expressjs.com/en/api.html#express.json

### Request
ENG: http://expressjs.com/en/api.html#req

### Routing
ENG: https://expressjs.com/en/starter/basic-routing.html

ENG: https://expressjs.com/en/guide/routing.html

## Model View Controller

DEU: https://de.wikipedia.org/wiki/Model_View_Controller

ENG: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

ENG: https://codingstatus.com/express-mvc-structure/

## Representational State Transfer (REST)
DEU: https://de.wikipedia.org/wiki/Representational_State_Transfer

ENG: https://en.wikipedia.org/wiki/Representational_state_transfer

and there especially:

ENG: https://en.wikipedia.org/wiki/Representational_state_transfer#Semantics_of_HTTP_methods
