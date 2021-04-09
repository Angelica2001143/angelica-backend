const express = require ('express');
const cors  = require  ('cors');
const mongoose = require ('mongoose');

const UserRouter = require('./routes/user');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080 ; //port

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; //get connection string from 
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',() => {
console.log('MongoDb connection established:');
});

app.use('/user', UserRouter);

//run server
app.listen(port, () =>{
    console.log('SERVER IS RUNNING AT PORT : ' + port)
});
