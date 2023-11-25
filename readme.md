
---

# Simple Express TypeScript Project - (klinik pintar example api)

## Description

This is a simple Express server implemented in TypeScript. It provides a robust setup for building a web server with Node.js, Express, and MySQL, including a development environment with live reloading and database management scripts.

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js
- npm or Yarn
- Docker (if you're using Docker for MySQL and phpMyAdmin)

## Installation

1. Clone the repository:
   ```bash
   git clone https://your-repository-url.git
   cd express-typescript
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root of your project and configure your environment variables, such as database connection settings.
   You can copy from `.env.example` file.

## Running the Project

### Development

- Start the development server with live reloading:
  ```bash
  npm run dev
  # or
  yarn dev
  ```

### Production

- Build the project:
  ```bash
  npm run build
  # or
  yarn build
  ```

- Start the production server:
  ```bash
  npm start
  # or
  yarn start
  ```

## Database Operations

### Migrations

Run database migrations:
  ```bash
  npm run migrate
  # or
  yarn migrate
  ```

### Seeding

Seed the database with sample data:
  ```bash
  npm run seed
  # or
  yarn seed
  ```

## Formatting Code

To format the codebase using Prettier:
  ```bash
  npm run format
  # or
  yarn format
  ```

----

## Running with Docker Compose

The project includes a `docker-compose.yml` file, which simplifies the process of setting up and running the application along with its dependencies, such as MySQL and phpMyAdmin.

### Prerequisites

- Docker
- Docker Compose

### Steps to Run

1. **Starting the Services:**

   To start all services defined in the `docker-compose.yml` file (app, MySQL database, and phpMyAdmin), run the following command in the root directory of the project:

   ```bash
   docker-compose up -d
   ```

   The `-d` flag runs the containers in detached mode, meaning they will run in the background.

2. **Accessing the Application:**

   - The application will be available at `http://localhost:9000`.
   - phpMyAdmin will be accessible at `http://localhost:8080`.

3. **Stopping the Services:**

   To stop and remove the containers, networks, and volumes created by Docker Compose, run:

   ```bash
   docker-compose down
   ```

### Rebuilding the Application

If you make changes to the application's Dockerfile or its dependencies, you'll need to rebuild the Docker image. To do this, run:

```bash
docker-compose up -d --build
```

This command will rebuild the image for the `app` service and restart the containers.

### Notes

- The MySQL service is configured to store data in a Docker volume named `mysql-data`. This means your database data will persist across container restarts.
- Ensure that any necessary environment variables are set, either in the `docker-compose.yml` file or in an `.env` file.

----

## Author

Gadani Himan Gurusinga - gadanihiman@gmail.com

## License

This project is licensed under the ISC License.

