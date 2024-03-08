const express = require ('express');
const router=  require('./config/routes')
const mongodb = require('./config/mongoose')
const app = express();
require("dotenv").config()


app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}`));
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(router)



const port = process.env.PORT

app.listen(port, () => console.log(`Server is running on ${port}`));