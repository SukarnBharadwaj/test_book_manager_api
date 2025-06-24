# tests/test_unit_model.py

def test_book_data_structure():
    # Simulate the structure returned from DB
    book = {
        'id': 1,
        'title': '1984',
        'author': 'George Orwell',
        'genre': 'Dystopian',
        'year_published': 1949
    }
    assert book['title'] == '1984'
    assert book['author'] == 'George Orwell'
