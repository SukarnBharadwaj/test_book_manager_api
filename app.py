from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from db_config import get_db_connection

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/books', methods=['GET'])
def get_books():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM books')
    books = cursor.fetchall()
    conn.close()
    return jsonify(books)

@app.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM books WHERE id = %s', (book_id,))
    book = cursor.fetchone()
    conn.close()
    return jsonify(book)

@app.route('/books', methods=['POST'])
def add_book():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO books (title, author, genre, year_published) VALUES (%s, %s, %s, %s)',
                   (data['title'], data['author'], data['genre'], data['year_published']))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Book added'}), 201

@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('UPDATE books SET title=%s, author=%s, genre=%s, year_published=%s WHERE id=%s',
                   (data['title'], data['author'], data['genre'], data['year_published'], book_id))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Book updated'})

@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM books WHERE id=%s', (book_id,))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Book deleted'})

if __name__ == '__main__':
    app.run(debug=True)
