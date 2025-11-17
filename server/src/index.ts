import express from 'express';
import cors from 'cors';
import config from './config/config.js';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/auth.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the server!',
    version: '1.0.0',
    status: 'Server running successfully!'

  });
});

app.use('/api/auth', authRoutes);


app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}`);
});

app.get('/test-error', (req, res) => {
  throw new Error('This is a test error!');
});

app.use(errorHandler);