import { Router } from 'express';
import { syncUserController } from '../controllers/authController.js';

const router = Router();

router.use((req, res, next) => {
  console.log('🛣️ Auth router hit:', req.method, req.path)
  console.log('🛣️ Body at router level:', req.body)
  next()
})

router.post('/sync', syncUserController);


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