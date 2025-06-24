
# 📚 Book Manager API

A simple Flask-based REST API to manage a collection of books using CRUD operations (Create, Read, Update, Delete). This project uses a MySQL database and includes testing with `pytest` and `pytest-cov`.

---

## 🛠 Tech Stack

- Python 3
- Flask
- MySQL
- SQL Connector (mysql-connector-python)
- pytest
- pytest-cov
- Flask-CORS

---

## 🚀 Getting Started

### 📦 Install Requirements

```bash
pip install -r requirements.txt
```

> If requirements.txt is missing, manually install:

```bash
pip install Flask mysql-connector-python pytest pytest-cov flask-cors
```

---

## ⚙️ Setup Environment

Create a `.env` file or export the following environment variables:

```bash
export DB_HOST=localhost
export DB_USER=root
export DB_PASSWORD=your_password
export DB_NAME=bookdb
```

Set up your MySQL test database:

```sql
CREATE DATABASE bookdb;
CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'testpass';
GRANT ALL PRIVILEGES ON bookdb.* TO 'testuser'@'localhost';
FLUSH PRIVILEGES;
```

---

## ▶️ Running the App

```bash
python app.py
```

This will start the Flask development server at `http://127.0.0.1:5000/`.

---

## 📬 API Endpoints

| Method | Route             | Description               |
|--------|-------------------|---------------------------|
| GET    | `/books`          | Get all books             |
| GET    | `/books/<id>`     | Get a specific book       |
| POST   | `/books`          | Add a new book            |
| PUT    | `/books/<id>`     | Update a book             |
| DELETE | `/books/<id>`     | Delete a book             |

---

## 🧪 Testing

### 📌 Run all tests with coverage:

```bash
pytest --cov=app tests/
```

### 📊 View HTML coverage report:

```bash
pytest --cov=app --cov-report=html
open htmlcov/index.html  # or start htmlcov/index.html on Windows
```

---

## ✅ Test Status

| Test Type         | Status  | Notes                                                                 |
|-------------------|---------|-----------------------------------------------------------------------|
| Unit Tests        | ✅ Passed | Validated model structure and logic                                  |
| API Tests         | ✅ Passed | Tested CRUD endpoints using Flask test client                        |
| Integration Tests | ⚠️ Failed | Some tests failed due to MySQL authentication error on this machine  |

> A few additional tests (e.g., `test_delete_book`, `test_add_and_get_book`) are written, but they are not passing **on this device** due to MySQL access denied errors (Error 1045). These are expected to run successfully on a correctly configured machine.

---

## 📸 Coverage Screenshot

![Coverage Screenshot](screenshot.png)

---

## 📂 Project Structure

```
book-manager-api/
├── app.py                  # Flask app with routes
├── db_config.py            # DB connection logic
├── templates/
│   └── index.html          # Homepage
├── tests/
│   ├── conftest.py         # Pytest fixtures
│   ├── test_api_endpoints.py
│   ├── test_integration_books.py
│   └── test_unit_model.py
```

---

## 🤝 Contributions

Contributions and suggestions are welcome! Please open an issue or submit a pull request.

---


