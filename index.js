// index.js

const arith = require("./arith");
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || "8000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { title: "Home" , error: null , res: null});
  });

app.post("/arith", (req, res) => {
   let a = parseInt(req.body.a);
   let b = parseInt(req.body.b);
   switch(req.body.op) {
     case 'add':
        res.render("index", { title: "Home", error: null , res: arith.add(a,b)});
        break;
     case 'mul':
        res.render("index", { title: "Home", error: null , res: arith.mul(a,b)});
        break;
     case 'sub':
        res.render("index", { title: "Home", error: null , res: arith.sub(a,b)});
        break;
     case 'div':
        res.render("index", { title: "Home", error: null , res: arith.div(a,b)});
        break;
   }
 });

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});