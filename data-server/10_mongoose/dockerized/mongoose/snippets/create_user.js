db.createUser(
	{
		user: "root",
		pwd: "example",
		roles: [ 
			{ 
				role: "userAdminAnyDatabase", 
				db: "admin" 
			}, 
			"readWriteAnyDatabase" ]
	}
)
