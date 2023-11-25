import express from 'express';
import { API_PREFIX } from './constants/paths';
import router from './routes/index.routes';
import 'dotenv/config';

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

// TODO set CI/CD for the repository
// TODO create unit test
