require("dotenv").config();
const app = require("./app");
require("./db/conn");

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})