
Welcome to 
# Hirademy Books

Hirademy Books is a mini frontend application built with React.js to display a list of books and their details. The application uses component-based architecture, dynamic data loading from APIs, and includes pagination functionality for easy navigation between book pages.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features
- Display a list of books dynamically loaded from an API.
- View detailed information of a selected book.
- Pagination to navigate through the book list.

## Technology Stack
- **Frontend Framework**: React.js
- **CSS Framework**: Custom CSS with responsive design principles
- **API Testing**: Postman
- **Deployment**: Vercel

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Prathamesh0901/book-management.git
   cd book-management
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:5173/`.

## Usage

### Books Page

- **URL**: `/books`
- **Description**: Displays links to all books. Each book name is a clickable link that navigates to the Book Details Page.
- **API**: `GET /Books`

### Book Details Page

- **URL**: `/books/:id`
- **Description**: Displays detailed information of the selected book, including title, ISBN, page count, and authors.
- **API**: `GET /Books/:id`

## API Reference

### Books API

- **GET /Books**
  - **URL**: `http://softwium.com/api/books`
  - **Description**: Fetches the list of all books.

- **GET /Books/:id**
  - **URL**: `http://softwium.com/api/books/:id`
  - **Description**: Fetches details of a specific book by its ID.

## Components

### Header
Displays the application title "Hirademy Books".

### BookList
Displays a list of books with pagination. Each book is clickable and navigates to the book details page.

### Pagination
Handles page navigation and allows users to navigate through the book list.

### Loading
Displays a loading spinner when data is being fetched from the API.

### Error
Displays an error message when there is an issue fetching data from the API.

### BookDetailsPage
Displays detailed information of a selected book, including its image, title, ISBN, page count, and authors.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.