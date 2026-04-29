import { Router } from 'express';

const router = Router();

router.post('/signup', (req, res) => {
  res.json({ 
    message: 'Sign up endpoint - coming soon!',
    received: req.body 
  });
});

router.post('/signin', (req, res) => {
  res.json({ 
    message: 'Sign in endpoint - coming soon!',
    received: req.body 
  });
});

router.post('/signout', (req, res) => {
  res.json({ 
    message: 'Sign out endpoint - coming soon!',
    received: req.body 
  });
});

export default router;