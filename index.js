const express = require("express");
const router = require("./routes");
const { port } = require("./config");

const app = express();
router(app);

app.listen(port, ()=> {
  console.log(`Listening on port ${port}`);
});