const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "Bhupendra@123",
        database: "crud_knex_mysql"
    },
});

knex.schema.hasTable("crud_knex").then(function (exists) {
    if (!exists) {
      knex.schema
        .createTable("crud_knex", (table) => {
          table.increments("id");
          table.string("name");
          table.string("user_name");
          table.string("email");
          table.integer("password");
        })
        .then((data) => {
            console.log("Table Created.....");
        })
        .catch((err) => {
            console.log(err, 'table.....');
        });
    }
  }).catch(err=>{
      res.send("error1")
      console.log(err.message)
  });

module.exports = knex
