# # tests/test_api_endpoints.py

# def test_homepage(client):
#     response = client.get('/')
#     assert response.status_code == 200

# def test_get_books_empty(client):
#     response = client.get('/books')
#     assert response.status_code == 200
#     assert isinstance(response.get_json(), list)

# def test_delete_book(client):
#     # First create a book
#     data = {
#         "title": "Temp Book",
#         "author": "Temp Author",
#         "genre": "Temp",
#         "year_published": 2000
#     }
#     create_resp = client.post('/books', json=data)
#     assert create_resp.status_code == 201

#     # Get all books to find the new one
#     books = client.get('/books').get_json()
#     book_id = books[-1]['id']

#     # Now delete
#     delete_resp = client.delete(f'/books/{book_id}')
#     assert delete_resp.status_code == 200
#     assert delete_resp.get_json()['message'] == 'Book deleted'
