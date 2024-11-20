const { Router } = require("express");
const newRouter = Router();

newRouter.get("/new", (req, res) => {
  res.send("creating view right now");
});

module.exports = newRouter;
