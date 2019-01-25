require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");
const app = express();
const { getInventory, postProduct,  } = require("./controller");

app.use(json());

const port = 3001;

app.get("/api/inventory", getInventory);
app.post("/api/product", postProduct);
// app.delete("/api/delete/:id", deleteProduct);

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
    app.set("db", dbInstance);
}).catch(error => console.log(error));

app.listen(port, ()=> console.log(`listening on port ${port}`));
