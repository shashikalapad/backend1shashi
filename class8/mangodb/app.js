const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

