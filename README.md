<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project Setup Guide

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.
- MongoDB installed and running.
- Vue 3 CLI installed for the frontend application.

## Step 1: Project Initialization

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

## Step 2: Environment Setup

1. **Create a `.env` file** in the root directory and add the following environment variables:
   ```plaintext
   DATABASE_URI=mongodb://localhost:27017/your-database-name
   JWT_SECRET=your-jwt-secret
   ```

2. **Configure the Application**
   - The application uses `@nestjs/config` for configuration management. Ensure your `src/config/config.ts` is set up to load these environment variables.

## Step 3: Database Connection

1. **Ensure MongoDB is running** on your local machine or a remote server.
2. **Verify the connection string** in your `.env` file matches your MongoDB setup.

## Step 4: Running the Application

1. **Start the NestJS Application**
   ```bash
   npm run start:dev
   ```

2. **Access the API**
   - The API will be running at `http://localhost:3000`.

## Step 5: Integrating with Vue 3 Frontend

1. **Set up the Vue 3 Application**
   - Ensure you have the Vue CLI installed:
     ```bash
     npm install -g @vue/cli
     ```

2. **Create a new Vue 3 project**
   ```bash
   vue create my-vue-app
   cd my-vue-app
   ```

3. **Install Axios for HTTP requests**
   ```bash
   npm install axios
   ```

4. **Configure Axios to connect to the NestJS API**
   - In your Vue app, set up Axios to point to `http://localhost:3000`.

5. **Run the Vue Application**
   ```bash
   npm run serve
   ```

6. **Access the Frontend**
   - The Vue app will be running at `http://localhost:8080`.

## Additional Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Vue 3 Documentation](https://v3.vuejs.org/guide/introduction.html)

## Support

For any issues or questions, please reach out via [Discord](https://discord.gg/G7Qnnhy) or check the [NestJS Documentation](https://docs.nestjs.com).

## License

This project is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Project setup

```bash
$ npm install
```