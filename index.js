const express = require("express");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const passport = require("./src/configs/google-oauth");
const db = require("./src/configs/db");
const User = require("./src/models/user.model");
const authenticate = require("./src/middlewares/authentication");
const userController = require("./src/routes/user.routes");
const batchController = require("./src/routes/batch.routes");
const adminController = require("./src/routes/admin.routes");
const courseController = require("./src/routes/course.routes");
const IAController = require("./src/routes/ia.routes");
const unitController = require("./src/routes/unit.routes");
const ppController = require("./src/routes/pair_programming.routes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(session({
   resave: false,
   saveUninitialized: true,
   secret: process.env.COOKIE_SECRET_KEY
 }));

passport.serializeUser(function (user, done) {
   done(null, user);
});

passport.deserializeUser(function (user, done) {
   done(null, user);
});

app.get(
   "/auth/google",
   passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
   "/auth/google/callback",
   passport.authenticate("google", {
      failureRedirect: "http://localhost:3000/login",
   }),
   (req, res) => {
      // user.email is generated inside google-oauth middleware
      const token = jwt.sign(
         { email: req.user.email },
         process.env.JWT_SECRET_KEY,
         { expiresIn: "7d" }
      );

      res.cookie("access_token", token);
      res.redirect("http://localhost:3000/");
   }
);


app.get("/", authenticate, (req, res) => {
   return res.status(200).json({ email: req.user.email });
});

app.use("/users", userController);
app.use("/batches", batchController);
app.use("/admin", adminController);
app.use("/courses", courseController);
app.use("/ia", IAController);
app.use("/units", unitController);
app.use("/pp", ppController);

const port = process.env.PORT || 8080;


app.listen(port, async () => {
   try {
      await db;
      console.log(`Listening on ${port}`);
   } catch (err) {
      console.log("Error while starting server");
   }
});
