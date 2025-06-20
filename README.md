# 📚 Book Manager API

A simple full-stack Book Manager application built with **Flask**, **MySQL**, and **vanilla JavaScript**.

## 🚀 Features

- View a list of all saved books
- Add new books via a form
- Update existing books with a dedicated form
- Delete books with a single click
- Search for books by title, author, or genre
- Toggle between light/dark mode using a button
- Animated toast notifications for user actions

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask, Flask-CORS
- **Database**: MySQL
- **Other**: LocalStorage for dark mode persistence

## 📁 Project Structure

```
book-manager-api/
├── app.py
├── db_config.py
├── requirements.txt
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
```

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/book-manager-api.git
cd book-manager-api
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Set up MySQL

Create a MySQL database and table:

```sql
CREATE DATABASE bookdb;
USE bookdb;
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    genre VARCHAR(100),
    year_published INT
);
```

> Update `db_config.py` with your MySQL credentials.

### 4. Run the Flask app

```bash
python app.py
```

Visit: [http://localhost:5000](http://localhost:5000)

## 🌐 API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/books`       | Get all books            |
| GET    | `/books/<id>`  | Get a specific book      |
| POST   | `/books`       | Add a new book           |
| PUT    | `/books/<id>`  | Update a specific book   |
| DELETE | `/books/<id>`  | Delete a specific book   |

## 🧠 Future Improvements

- Add user authentication
- Pagination support
- Switch to SQLAlchemy ORM
- Export books to CSV/PDF


