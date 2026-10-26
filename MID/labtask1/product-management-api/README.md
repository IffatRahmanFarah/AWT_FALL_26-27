# Product Management API

**SL:** 07  
**Name:** Golam Iffat Rahman Farah  
**ID:** 23-50230-1 
**Section:** D

## Tech Stack
NestJS, TypeORM, PostgreSQL

## Database Setup
1. Install PostgreSQL and pgAdmin.
2. Create a database: `CREATE DATABASE shop_db;`
3. Copy `.env.example` to `.env` and set your database password.

## Installation & Run
```bash
npm install
npm run start:dev
```
The API runs at http://localhost:3000

## Endpoints

### Products
| Method | Endpoint | Description |
|---|---|---|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get one product |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

### Employees
| Method | Endpoint | Description |
|---|---|---|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get one employee |
| PATCH | /employees/:id | Update an employee |
| DELETE | /employees/:id | Delete an employee |

## Screenshots
Postman screenshots are in the `screenshots/` folder.