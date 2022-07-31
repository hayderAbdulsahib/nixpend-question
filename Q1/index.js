const express = require("express");
const app = express();

require("./models/db");

const PORT = 5000;
// run the server locally on the desired PORT. Use the following link to open up the server http://localhost:5000`
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

//command to change the database
// mysql -u root < "./models/schema.sql" -p
