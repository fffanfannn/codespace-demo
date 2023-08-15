const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true";

app.use(bodyParser.json())
app.post('/', (req, res) =>{

  const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('mongodemo');
    const student = database.collection('student');

    // Query for a movie that has the title 'Back to the Future'
    // const query = { name: "Peter" };
    const result = await student.insertOne(req.body);

    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

  // console.log(req.body)
  res.send("HHHHHHHHH")
})

app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})


