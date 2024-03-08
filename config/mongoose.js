const mongoose = require ('mongoose');
require("dotenv").config()
url = process.env.URL
mongoose.connect(`${url}`)
.then(() => console.log('connected to the database'))
.catch(err => console.log(err));

