const express = require('express');
const path = require('path');
const viewRoutes = require('./routes/html');
const api = require("./routes/api");

//make sure port works on heroku or local

const PORT = process.env.PORT||3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use("/", viewRoutes);
app.use("/api", api);
app.listen(PORT, () => {
  console.log(`Note-Taker listening at http://localhost:${PORT}`);
});