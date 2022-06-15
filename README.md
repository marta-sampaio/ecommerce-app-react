# Fake Store React App [2022]

>Front-end E-Commerce Single-page application (SPA) built with React using [Fake Store API](https://fakestoreapi.com/) and [Fake Users API](https://edit-shop-api.herokuapp.com/api/users).

## Table of contents
- [1. Built With](#built-with)
- [2. Getting Started](#getting-started)
- [3. Dependencies](#dependencies)
- [4. Routes](#routes)

## 1. Built With 
- HTML5
- CSS3
- Sass
- JavaScript
- [React](https://reactjs.org/) - JS library

## 2. Getting Started
1. Run the following command in root directory to install all the dependencies of `package.json` file. 
  ```
  $npm install
  ```
2. Run the following command in root directory to start the project. 
  ```
  $npm start
  ```
Project starts running at `localhost:3000`.

## 3. Dependencies
### `react-router-dom` 
For building a SPA. 
### `commitizen` 
For generating clear and standard commit messages.
### `sass` 
For reusable and organized code in SCSS syntax.

## 4. Routes
### `/listing/`
Set as the default route. Displays the entire list of products, handles a filter and a sorting dropdown menus and the pagination buttons.
### `/login`
The Login route handles the submission of a costumer's log in credentials. Manages the state of the logged in object user which is shared by React Context with the rest of the application.
### `/product/` 
The Product route displays a previously selected product. It takes a product ID parameter which is an integer. No functionalities have been implemented at the present moment.
### `*` 
404 Route handles nonexistent routes. It is redirected to `/404` and displays a not found message.
