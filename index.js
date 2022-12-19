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
   secret: 'bla bla bla' 
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
      successRedirect: "http://localhost:3000/",
      failureRedirect: "http://localhost:3000/login",
   })
);

app.get("/auth/google/success", authenticate(), async (req, res) => {
   try {
      const data = await User.find();
      res.send({ users: data });
   } catch (err) {
      res.send({ error: true, message: "Error while getting users" });
   }
});

app.post("/add", async (req, res) => {
   try {
      const entry = User({
         ...req.body,
         createdAt: new Date(),
         updatedAt: new Date(),
      });
      await entry.save();
      res.send({ users: entry });
   } catch (err) {
      res.send({ error: true, message: "Error while adding user" });
   }
});


app.use("/users", userController);
app.use("/batches", batchController);
app.use("/admin", adminController);
app.use("/courses", courseController);
app.use("/ia", IAController);
app.use("/units", unitController);
app.use("/pp", ppController);

const port = process.env.PORT || 2345;


app.listen(port, async () => {
   try {
      await db;
      console.log(`Listening on ${port}`);
   } catch (err) {
      console.log("Error while starting server");
   }
});
