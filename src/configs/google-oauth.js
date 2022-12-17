require("dotenv").config();
const passport = require("passport");
const User = require("../models/user.model");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { v4: uuid } = require("uuid");

passport.use(
   new GoogleStrategy(
      {
         clientID: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
         callbackURL: "http://localhost:2345/auth/google/callback",
         passReqToCallback: true,
      },
      async function (request, accessToken, refreshToken, profile, done) {
         const user = await User.findOne({ email: profile?.email });
         if (!user) {
            let roles = "";
            if (profile?.email.split("@")[1] === "masaischool.com") {
               roles = "admin";
            } else {
               roles = "users";
            }

            let entry = await User.create({
               email: profile?.email,
               password: uuid(),
               roles,
               createdAt: new Date(),
               updatedAt: new Date(),
            });

            entry.save();
         }
         return done(null, "user");
      }
   )
);

module.exports = passport;
