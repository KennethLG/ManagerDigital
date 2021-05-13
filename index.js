const express = require("express");
const router = require("./routes");
const { port } = require("./config");
const cors = require("cors");

// server
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// App routes
router(app);

// Start port
app.listen(port, ()=> {
  console.log(`Listening on port ${port}`);
});