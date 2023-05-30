const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const clientSecret = process.env.CLIENT_SECRET || '';
const clientID = process.env.CLIENT_ID || '';
const User = require('./models/UserModel');
const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

console.log('inside passport.ts');

//initialize passport middleware
passport.initialize();
//enable persistent login sessions
passport.session();

//generate new instance of google strategy
//pass in clientID, clientSecret and callbackURL
passport.use(new GoogleStrategy({ 
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: '/auth/google/callback', // HELP HERE - need to replace this with our specific callback URL or do we set the route to match this?
    passReqToCallback: true }, 
    async (accessToken: string, refreshToken: string, profile: any, done: any) => {
    // callback function called after successful authentication

        //extract user data from profile object
        const { id, displayName, email } = profile;
        console.log('profile', profile);
        console.log('inside passport callback', accessToken, refreshToken, profile);
        
        //save profile data in user object to be passed to db
        const userBody = {
            googleId: id,
            displayName: displayName,
            email: email,
        }
        //db call to find or create user
        try {      
            let user = await User.findOne({email: email})
            console.log('user found: ', user)
      
            if (user) {
                done(null, user)
            } else {
                user = await User.create(userBody)
                
                console.log('user created: ', user)
                done(null, user)
            }
        } catch(err) {
            console.log(err);
        }
    }
));

//can use the serializeUser and deserializeUser methods to define how user objects stored in the session
//here just passing user object through unchanged
passport.serializeUser((user: any, done: any) => {
    if(user) return done(null, user)
    else return done(null, false)
}),
passport.deserializeUser((id: string, done: any) => {
    if(id) return done(null, id)
    else return done(null, false)
}),

module.exports = passport;