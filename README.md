# Threaded Project - Travel Experts Backend

## Course Information

**Course Name:** Web Application Development  
**Course Code:** CPRG-210  
**Instructor:** Samuel Sofela  
**Project Due Date:** 10-22-2024  
**Group:** 4

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)

## Project Overview

Travel Experts is a comprehensive web platform designed to streamline the travel planning process for individuals and families. The website provides users with the ability to explore, compare, and order vacation packages all in one convenient location.

## Features

- **Vacation Packages Listing:** Allows users to view an up-to-date list of available travel packages sourced directly from the database. Each package includes a description, start and end dates, and price. Only valid packages with end dates in the future are displayed. Packages with a start date in the past are visually highlighted to ensure users are aware of the package status, helping them make informed booking decisions.
- **Agency and Agent Profiles:** Enables users to view a comprehensive list of travel agencies partnered with Travel Experts. Each agency profile includes detailed information such as the agency's name, address, and contact information. This feature helps users to make informed decisions by comparing different agencies based on their offerings and reputation
- **Online ordering:** Provides customers with an easy-to-use order form for each travel package. Users can enter their information and submit orders, which are automatically captured in the database, creating both customer and booking records.

## Technologies Used

- **Programming Language:** NodeJS, MySQL

## Usage

### Installation

Before running the application, ensure that all dependencies are installed. Run the following command in the project directory:

```sh
npm install
```

This will install all necessary packages specified in the `package.json` file.

### Setting Up Environment Variables

- Before starting the server, ensure that you have copied the `.env` file and renamed it based on the environment you're working in. For example, for local development, you should create a `.env.local` file
- Edit the `.env.local` file to configure the necessary environment variables for the local environment

### Running the Application Locally

To run the application in a local environment, use the following command:

```sh
npm run local
```

This will set the `NODE_ENV` to `local` and start the application with nodemon, enabling automatic server restarts when files change.

### Running the Application in Development Mode

To run the application in development mode, use the following command:

```sh
npm start
```

This will set the `NODE_ENV` to `development` and start the application with nodemon for automatic reloading.

### Running Tests

Currently, **no tests are implemented**. However, you can run the following command to display a message:

```sh
npm test
```

## API Endpoints

### Contact Page

- `GET /contacts` - Retrieve a list of all agency contacts

### Packages Page

- `GET /packages` - Retrieve a list of all available travel packages

- `POST /packages/:packageId/order` - Create a booking order for a specific package

### Customer

- `POST /customer` - Create a new customer
