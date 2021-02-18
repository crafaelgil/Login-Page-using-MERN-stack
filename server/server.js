const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const dbConfig = require('./config/db.config');

const app = express();
const Role = db.role;

var corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(response => {
    console.log("Suceesfully connect to MongoDB");
    initial();
  })
  .catch(err => {
    console.log("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if(!err && count === 0) {
      new Role({
        namee: "user"
      }).save(err => {
        if(err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        namee: "moderator"
      }).save(err => {
        if(err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({
        namee: "admin"
      }).save(err => {
        if(err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

app.get("/", (req, res) => {
  res.json({ messaage: "Welcome to the app" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});