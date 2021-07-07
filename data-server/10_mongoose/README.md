# MongoDB

## Sample Code:
https://github.com/MicheleMarschner/ToDoApp-server

### Live Code Run once Scripts
- get started
- CRUD

- refactor CRUD:
  - database config/connection
  - schema/model

### Refactor Dominik's server to use "mongoose" instead of "mongodb"

## Usage "Docker"
```bash
# first start or after `down`
$> docker-compose up

$> docker-compose stop
$> docker-compose start

# end of project
$> docker-compose down
```

---

## Objectives
- Setup and use dockerized environment
  - mongodb
  - mongo-express
- mongoose getting started
  - Schema-Model-Document
  - CRUD with mongoose

---

## Curriculum
### Mongo Introduction
- Mongo Shell: `use <db name>`

	- Creating a collection
	```javascript
	db.createCollection("collection_a");
	show collections;
	```
	- A single record in a collection
	- Insert document `db.<collection>.insertOne(<document>);`
	Difference to SQL: Mongo implicitly creates a collection with `.insertOne()`

	- Field
		- A value in a record
		- showing all documents `db.<collection>.find({});`

	- IDs identify records
	- Difference to SQL: Mongo implicitly provides unique IDs

    - Insert multiple documents:

	  ```
	  db.<collection>.insertMany([
		  { <document_1> }, 
		  { <document_2> }, 
		  ..., 
		  { <document_n> }
	  ]);
	  ```

	- Retrieve by criteria:
	  `db.<collection>.find({ <field_name>: { <criteria> } });`

	- Update a document:
	  `db.<collection>.updateOne({ <criteria>: {$set: <value> } });`

	- Delete: Deleting a document:
	  `db.<collection>.deleteOne({ <criteria> });`

- MongoDB-Admin-GUI: "compass" (quick overview)
- Mongo-Atlas

### Mongo-ODM "mongoose"
- Introduction: ODM and ORM, abstracting the database

- Adding `mongoose`:
	- Installing mongoose
	- Connecting to our database with `mongoose.connect()`
	- Listening to errors with `mongoose.connection.on('error', <function>);`

- Schema design principles I:
	- Planning our collection schema: Class diagrams
	- MVC Concepts: M is for Model
	- Project organization IV: The `models` folder 
	- Describing collections: 
	`new mongoose.Schema({<field name>: <field type>});`

- Model:
	- Exporting a model: `mongoose.model(<collection name>, <schema>);`
	- What are seed scripts? Seed script as database Proof Of Concept.
	- Using our models in seed scripts: `new <model name>({<data>})`
	- Saving documents to database: `Model.prototype.save()`

- Mocking data:
	- Generating fake data using `faker`: `faker` api docs
	- Creating multiple documents at once: 
	`await <model name>.create(<document array>);`
	- Purging collections: `await <model name>.deleteMany({});`

---

## Links
[mongoose "Getting Started"](https://mongoosejs.com/docs/index.html)

[MongoDB Compass (Admin GUI)](https://www.mongodb.com/try/download/compass)
