import express from 'express';
import cors from 'cors';
import config from './config/config.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the server!',
    version: '1.0.0',
    status: 'Server running successfully!'

  });
});


app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}`);
  console.log(`🔗 Test your API at http://localhost:${config.port}/api/test`);
});
