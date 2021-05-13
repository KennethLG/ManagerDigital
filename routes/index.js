const User = require("../database/user");

require("../database/connection");

const router = (app) => {

  app.get("/getUsers", async (req, res, next) => {
    try {
      const data = await User.find();
      res.send(data);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  app.get("/getUser/:id", async (req, res, next) => {
    try {
      const data = await User.findById(req.params.id);
      res.send(data);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  app.post("/createUser", async (req, res, next)=> {
    try {
      const data = req.body;
      const user = new User(data);
      await user.save();
      res.send({
        message: "User saved successfully"
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  app.delete("/deleteUser/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await User.deleteOne({_id: id});
      res.send({
        message: "User deleted"
      })
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  app.post("/editUser/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await User.updateOne({_id: id}, req.body);
      res.send({
        message: "User deleted"
      })
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

}

module.exports = router;