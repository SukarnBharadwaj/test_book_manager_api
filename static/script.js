const bookList = document.getElementById('book-list');
const form = document.getElementById('book-form');

// Add a search bar
const searchInput = document.createElement('input');
searchInput.placeholder = "Search books...";
searchInput.id = "search-input";
searchInput.style.margin = "20px auto";
searchInput.style.display = "block";
searchInput.style.padding = "10px";
searchInput.style.fontSize = "16px";
document.body.insertBefore(searchInput, bookList);

// Toast popup
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.padding = '12px 24px';
  toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#e74c3c';
  toast.style.color = '#fff';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
  toast.style.zIndex = '9999';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.5s ease-in-out';
  document.body.appendChild(toast);
  setTimeout(() => toast.style.opacity = '1', 100);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

let books = [];

function loadBooks() {
  fetch('/books')
    .then(res => res.json())
    .then(data => {
      books = data;
      displayBooks(data);
    });
}

function displayBooks(data) {
  bookList.innerHTML = '';
  data.forEach(book => {
    const li = document.createElement('li');
    li.style.animation = 'fadeInUp 0.4s ease';
    li.innerHTML = `
      <span><strong>${book.title}</strong> by ${book.author}</span>
      <div style="display: flex; gap: 10px;">
        <button onclick="startUpdate(${book.id})">Update</button>
        <button onclick="deleteBook(${book.id})">Delete</button>
      </div>
    `;
    bookList.appendChild(li);
  });
}

function startUpdate(id) {
  const book = books.find(b => b.id === id);
  const updateForm = document.getElementById('update-form');
  updateForm.style.display = 'block';

  document.getElementById('update-id').value = book.id;
  document.getElementById('update-title').value = book.title;
  document.getElementById('update-author').value = book.author;
  document.getElementById('update-genre').value = book.genre;
  document.getElementById('update-year').value = book.year_published;

  showToast('Loaded book for update...');
}

document.getElementById('update-form').addEventListener('submit', e => {
  e.preventDefault();
  const id = document.getElementById('update-id').value;

  const data = {
    title: document.getElementById('update-title').value,
    author: document.getElementById('update-author').value,
    genre: document.getElementById('update-genre').value,
    year_published: parseInt(document.getElementById('update-year').value)
  };

  fetch(`/books/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(() => {
    showToast('Book updated successfully!');
    document.getElementById('update-form').reset();
    document.getElementById('update-form').style.display = 'none';
    loadBooks();
  });
});


form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    genre: document.getElementById('genre').value,
    year_published: parseInt(document.getElementById('year').value)
  };

  fetch('/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(() => {
    showToast('Book added successfully!');
    form.reset();
    loadBooks();
  });
});

function deleteBook(id) {
  fetch(`/books/${id}`, { method: 'DELETE' })
    .then(() => {
      showToast('Book deleted successfully!', 'error');
      loadBooks();
    });
}

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(term) ||
    book.author.toLowerCase().includes(term) ||
    book.genre.toLowerCase().includes(term)
  );
  displayBooks(filtered);
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

loadBooks();
