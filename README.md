# E-commerce Back End

The E-commerce Back End manages a database for an online store. It handles inventory, and it helps handle sales. It's designed for use by a store owner, or by an agent of a store owner.

It uses Sequilize to connect to a SQL database, and uses express.js for middleware.

![Express.js](https://img.shields.io/badge/Express.js-4.17.1-blue.svg)
[![Sequelize](https://img.shields.io/badge/Sequelize-VERSION-blue.svg)](https://sequelize.org)
[![MySQL](https://img.shields.io/badge/MySQL-VERSION-blue.svg)](https://www.mysql.com)

## Usage Instructions

In the root directory (that is, the same directory as `.env.EXAMPLE`) there needs to be a file named `.env`; that `.env` file needs to have the same three lines as the `env.EXAMPLE` does, only it needs to have the `''` parts filled in.

In a terminal, enter `npm run seed` to seed the database.

In a terminal, enter `npm start` to start the server. It should be running on port 3001.

## Screenshots

....work in progress

## Future Development

At the time of writing, development has not yet even started. So the entire, essential "user story" needs to be implimented:

<hr>
AS A manager at an internet retail company

I WANT a back end for my e-commerce website that uses the latest technologies

SO THAT my company can compete with other e-commerce companies

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete data in my database