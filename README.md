# E-commerce Back End

The E-commerce Back End manages a database for an online store. It handles inventory, and it helps handle sales. It's designed for use by a store owner, or by an agent of a store owner.

There should be functionality to do CRUD operations for products, the product categories, and the product tags.

It uses Sequilize to connect to a SQL database, and uses express.js for middleware.

![Express.js](https://img.shields.io/badge/Express.js-4.17.1-blue.svg)
[![Sequelize](https://img.shields.io/badge/Sequelize-VERSION-blue.svg)](https://sequelize.org)
[![MySQL](https://img.shields.io/badge/MySQL-VERSION-blue.svg)](https://www.mysql.com)

## Usage Instructions

In the root directory (that is, the same directory as `.env.EXAMPLE`) there needs to be a file named `.env`; that `.env` file needs to have the same three lines as the `env.EXAMPLE` does, only it needs to have the `''` parts filled in.

In a terminal, enter `npm run seed` to seed the database.

In a terminal, enter `npm start` to start the server. It should be running on port 3001.

## Screenshots

A screencap of something you're not proud of is still better than no screencap at all.

![module thirteen challenge screencap](./screencap_for_readme.png)

## Future Development

Unfortunately, the project did not have time to impliment even the most basic functionality. We still strive for minimum viability.