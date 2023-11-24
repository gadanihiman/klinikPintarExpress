import express from 'express';
// import router from './routes/index.routes';
import { API_PREFIX } from './constants/paths';
import connectToDatabase from './utils/databaseConnection';
import createRouter from './routes/index.routes';
// TODO change database?
// It's ok for simple project

const app = express();
const PORT = 9000;

async function startServer() {
  try {
    const db = await connectToDatabase();

    app.use(express.json());
    app.use(express.static('public'));

    const initRouter = createRouter(db);
    app.use(API_PREFIX, initRouter);

    // TODO how do you debug typescript code?
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
}

startServer();

// TODO create dockerfile
// TODO create docker-compose file
// TODO set CI/CD for the repository
// TODO create unit test
