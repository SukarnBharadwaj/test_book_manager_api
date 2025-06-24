# # tests/test_integration_books.py

# import json

# def test_add_and_get_book(client):
#     # Add a book
#     payload = {
#         "title": "Dune",
#         "author": "Frank Herbert",
#         "genre": "Sci-Fi",
#         "year_published": 1965
#     }
#     post_resp = client.post("/books", json=payload)
#     assert post_resp.status_code == 201

#     # Get list of books
#     get_resp = client.get("/books")
#     assert get_resp.status_code == 200
#     books = get_resp.get_json()
#     assert any(book['title'] == "Dune" for book in books)
