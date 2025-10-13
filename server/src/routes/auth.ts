import { Router } from 'express';

const router = Router();

router.post('/register', (req, res) => {
  res.json({ 
    message: 'Register endpoint - coming soon!',
    received: req.body 
  });
});

router.post('/login', (req, res) => {
  res.json({ 
    message: 'Login endpoint - coming soon!',
    received: req.body 
  });
});

export default router;