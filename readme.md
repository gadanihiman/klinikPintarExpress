# Klinik Pintar Example App Using Express TypeScript and Vue.js SPA

## Description

This project is a full-stack web application featuring a Vue.js frontend and an Express TypeScript backend. It serves as an example API for a clinic management system, handling operations like managing diseases and patient information. The frontend is built with Vue.js, offering a dynamic user experience, while the backend is implemented in Express with TypeScript for robust server-side functionality.

## Prerequisites

Before running this project, ensure you have the following installed:
- Node.js
- npm or Yarn
- Docker (optional, for running MySQL and phpMyAdmin in containers)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gadanihiman/klinikPintarExpress
   cd klinikPintarExpress
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root of your project based on the `.env.example` file.

## Running the Project

### Docker Compose

I Suggest to Start the project with Docker Compose for easy setup and running the project with MySQL and phpMyAdmin in containers. (make sure you have docker installed):

  ```bash
  docker-compose up -d
  ```
Before Everything, you need to run the migration and seed the database with sample data using the provided scripts:
  ```bash
  npm run migrate
  npm run seed
  # or
  yarn migrate
  yarn seed
  ```


#### Then you can access the project with the following steps:

### Database (MySQL)
Open `http://localhost:8080` in your browser to view phpMyAdmin to view your MYSQL Database.
  - if you don't need phpMyAdmin, you can remove the phpmyadmin service from docker-compose.yml
  - you are free to change the port of phpMyAdmin in docker-compose.yml

### Frontend (Vue.js)
Open `http://localhost:9000` in your browser to view the frontend.

### Backend (Express TypeScript)
Open `http://localhost:9000/api` using Postman for using the backend API.

-----

## Development

- Start the development server with live reloading:
  ```bash
  npm run dev
  # or
  yarn dev
  ```

## Production

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

- notes:
  - suggestion for production server is using docker-compose up -d

## Database Operations

### Migrations and Seeding

- Run migrations and seed the database with sample data using the provided scripts:
  ```bash
  npm run migrate
  npm run seed
  # or
  yarn migrate
  yarn seed
  ```

## Formatting Code

- Format the codebase using Prettier:
  ```bash
  npm run format
  # or
  yarn format
  ```

## Running with Docker Compose (recommended)

- Follow the instructions in the existing `README.md` section for Docker Compose.

## Author

Gadani Himan Gurusinga - gadanihiman@gmail.com

## License

This project is licensed under the ISC License.
