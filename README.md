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

## Step 5: 

# Vue 3 Application Integrated with NestJS REST API

## Table of Contents
1. [Project Setup](#project-setup)
2. [Folder Structure](#folder-structure)
3. [Installing Dependencies](#installing-dependencies)
4. [Authentication Flow](#authentication-flow)
5. [API Service for Axios Requests](#api-service-for-axios-requests)
6. [Vue Components & Views](#vue-components--views)
7. [Vue Router for Navigation](#vue-router-for-navigation)
8. [State Management with Pinia (Optional)](#state-management-with-pinia-optional)
9. [Handling Protected Routes](#handling-protected-routes)
10. [CORS Configuration in NestJS](#cors-configuration-in-nestjs)
11. [Testing & Deployment](#testing--deployment)

---

## 1. Project Setup

To create a Vue 3 application using Vite and integrate it with a NestJS REST API:

[CLONE THIS REPO: https://github.com/Tutankhamun95/easygenerator-auth-module-fe]

---

## 2. Folder Structure

```
vue3-nestjs-app/
│── src/
│   │── components/
│   │── views/
│   │── router/
│   │── store/
│   │── services/
│   │── App.vue
│   │── main.ts
│── public/
│── package.json
│── vite.config.ts
```

---

## 3. Installing Dependencies

```sh
npm install axios vue-router pinia
```

---

## 4. Authentication Flow

1. User **signs up** (`POST /signup`)
2. User **logs in**, receives a JWT (`POST /login`)
3. Token is **stored in localStorage**
4. User accesses **protected route** (`GET /protected`)
5. If token expires, a **refresh token** is used (`POST /refresh`)
6. If refresh fails, user is **logged out**

---

## 5. API Service for Axios Requests

```ts
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_URL,
});

const setAuthToken = (token: string) => {
  localStorage.setItem('accessToken', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const login = async (data: { email: string; password: string }) => {
  const response = await api.post('/main/login', data);
  setAuthToken(response.data.accessToken);
  return response.data;
};
```

---

## 6. Vue Components & Views

- **LoginView.vue**: Handles user login
- **SignupView.vue**: Handles user signup
- **DashboardView.vue**: Displays protected content

---

## 7. Vue Router for Navigation

```ts
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import SignupView from '@/views/SignupView.vue';
import DashboardView from '@/views/DashboardView.vue';

const routes = [
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignupView },
  { path: '/dashboard', component: DashboardView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
```

---

## 8. State Management with Pinia (Optional)

Install Pinia:

```sh
npm install pinia
```

Create a store:

```ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
    },
  },
});
```

---

## 9. Handling Protected Routes

```ts
const isAuthenticated = () => !!localStorage.getItem('accessToken');

beforeEnter: (to, from, next) => {
  if (!isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
}
```

---

## 10. CORS Configuration in NestJS

Modify `main.ts` in the NestJS project:

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  await app.listen(3000);
}
bootstrap();
```

---

## 11. Testing & Deployment

### Run Vue App
```sh
npm run dev
```

### Run NestJS API
```sh
npm run start
```

### Deployment
- **Frontend**: Deploy on Vercel, Netlify, or AWS S3
- **Backend**: Deploy on AWS EC2, DigitalOcean, or Render

---

This guide provides a full walkthrough for integrating Vue 3 with NestJS. 🚀

