import { Router, Response } from 'express';

const router: Router = Router();
const passport = require('../passport');

router.get('/v1/auth/google', 
    passport.authenticate('google', { 
        session: false, 
        scope: ['profile', 'email'] 
    }));

export default router;




