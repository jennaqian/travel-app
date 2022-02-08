const app = require("./app.js");

//make environmental variable available to us
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
})