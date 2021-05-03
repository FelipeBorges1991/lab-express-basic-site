const router = require("express").Router();
const path = require("path");

router.get("/home", (req, res) => {
  console.log("GET request at /home route");
  return res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/about", (req, res) => {
    console.log("GET request at /about route");
    return res.sendFile(path.join(__dirname, "../views/about.html"));
  });

  router.get("/works", (req, res) => {
    console.log("GET request at /works route");
    return res.sendFile(path.join(__dirname, "../views/works.html"));
  });
  

module.exports = router;
