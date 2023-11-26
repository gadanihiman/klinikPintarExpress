import express from 'express';
import 'dotenv/config';

import { API_PREFIX } from './constants/paths';
import router from './routes/index.routes';

const app = express();
const PORT = process.env.PORT || 9000;

async function startServer() {
  try {
    app.use(express.json());
    app.use(express.static('public'));
    app.use(API_PREFIX, router);

    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
}

startServer();
