db.createUser(
    {
        user: "crud",
        pwd: "mongo",
        roles: [
            {
                role: "readWrite",
                db: "crud-nodejs"
            }
        ]
    }
);