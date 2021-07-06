await db.useDb(DATABASE);

var databaseName = await db.name;
log('database-name:', databaseName);
