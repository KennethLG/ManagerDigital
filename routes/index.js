require("../database/connection");

const router = (app) => {
  app.get("/", (req, res, next)=> {
    try {
      res.send("works!");
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
}

module.exports = router;