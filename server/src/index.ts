import express from 'express';
import cors from 'cors';
import config from './config/config.js';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/auth.js';
import listings from './data/fakeData.js';

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

app.get('/api/listings', (req, res) => {
  res.json(listings);
});

app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}`);
});

app.use(errorHandler);