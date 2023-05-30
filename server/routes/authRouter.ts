import { Router, Request, Response } from 'express';

const router: Router = Router();
const passport = require('../passport');
console.log('inside authRouter');

router.get('/google', 
    passport.authenticate('google', { 
        session: false, 
        scope: ['profile', 'email'] 
    }));
router.get('/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    (req: Request, res: Response) => {
        console.log('req', req);
        res.redirect('/dashboard');
    }
);

// login user
router.get('/login', (req, res) => {
    res.render('login'); // Replace with the actual login page template
  });
  
  
//logout user
router.get('/logout', (req: Request, res: Response) => {
    req.logout((err: any)=> console.log('err', err));
    res.redirect('/')
  })

export default router;




