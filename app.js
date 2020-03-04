const form = document.getElementById('book-form');
const bookTitle = document.getElementById('exampleInputBookTitle');
const author = document.getElementById('exampleInputAuthor');
const isbn = document.getElementById('exampleInputISBN');
const table = document.getElementById('table');
const tableBody = document.getElementById('table-body');
const btnSubmit = document.getElementById('btn-submit');

form.addEventListener('click', addBookItem);

function addBookItem(e) {
  if(bookTitle.value === '' || author.value === '' || isbn.value === '') {
    alert('Pleas complete all fields');
    return;
  }

  let rowBookList = tableBody.insertRow(0);
  let newCellTitle = rowBookList.insertCell(0);
  let newTitle = document.createTextNode(bookTitle.value);
  newCellTitle.appendChild(newTitle);

  let newCellAuthor = rowBookList.insertCell(1);
  let newAuthor = document.createTextNode(author.value);
  newCellAuthor.appendChild(newAuthor);

  let newCellIsbn = rowBookList.insertCell(2);
  let newIsbn = document.createTextNode(isbn.value);
  newCellIsbn.appendChild(newIsbn);

  let newCellRemoveBtn = rowBookList.insertCell(3);
  newCellRemoveBtn.appendChild(createRemoveBtn());

  bookTitle.value = '';
  author.value = '';
  isbn.value = '';

   e.preventDefault();
}

function createRemoveBtn() {
  const removeBtn = document.createElement('input');
  removeBtn.className = 'btn btn-danger btn-sm remove-btn';
  removeBtn.type = 'button';
  removeBtn.value = 'X';
  removeBtn.setAttribute('onclick', 'remove(this);');
  return removeBtn;
}