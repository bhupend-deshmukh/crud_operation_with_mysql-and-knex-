const express = require("express");
const knex = require("./config/db");

const app = express();

require("./controller/controller")
const router = require("./routes/routes")

app.use(express.json())
app.use("/",router)

const PORT = 2525
app.listen(PORT,()=>{
    console.log(`Your server is listening on http://localhost:${PORT}`);
})




