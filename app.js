const container = document.querySelector('.container');
const form = document.getElementById('book-form');
const bookTitle = document.getElementById('exampleInputBookTitle');
const bookAuthor = document.getElementById('exampleInputAuthor');
const bookIsbn = document.getElementById('exampleInputISBN');
const table = document.getElementById('table');
const tableBody = document.getElementById('table-body');
const btnSubmit = document.getElementById('btn-submit');

form.addEventListener('click', addBookItem);

function addBookItem(e) {
  if(bookTitle.value === '' || bookAuthor.value === '' || bookIsbn.value === '') {
    showAlertError('Pleas complete all fields');
    return;
  }

  let rowBookList = tableBody.insertRow(0);
  let newCellTitle = rowBookList.insertCell(0);
  let newTitle = document.createTextNode(bookTitle.value);
  newCellTitle.appendChild(newTitle);

  let newCellAuthor = rowBookList.insertCell(1);
  let newAuthor = document.createTextNode(bookAuthor.value);
  newCellAuthor.appendChild(newAuthor);

  let newCellIsbn = rowBookList.insertCell(2);
  let newIsbn = document.createTextNode(bookIsbn.value);
  newCellIsbn.appendChild(newIsbn);

  let newCellRemoveBtn = rowBookList.insertCell(3);
  newCellRemoveBtn.appendChild(createRemoveBtn());

  showAlertAdd('This item has been added');

  //storeItemInLocalStorage(bookTitle.value, bookAuthor.value, bookIsbn.value);

  bookTitle.value = '';
  bookAuthor.value = '';
  bookIsbn.value = '';

   e.preventDefault();
}

function createRemoveBtn() {
  const removeBtn = document.createElement('input');
  removeBtn.className = 'btn btn-danger btn-sm remove-btn';
  removeBtn.type = 'button';
  removeBtn.value = 'X';
  removeBtn.setAttribute('onclick', 'RemoveBtn(this);');
  return removeBtn;
}

function RemoveBtn(button) {
  const row = button.parentNode.parentNode;
  if(confirm('Are you sure?')) {
    table.deleteRow(row.rowIndex);
    showAlertDelete('This item has been deleted')
  }
}

// function storeItemInLocalStorage(title, author, isbn) {
//   const items = setItems();
//   let entry = new Object;
//   entry.name1 = title;
//   entry.name2 = author;
//   entry.value = isbn;
//   items.push(entry);

//   localStorage.setItem('items', JSON.stringify(items));
// }

// function getItems() {
//   let items;
//   if (localStorage.getItem('items') === null) {
//     items = [];
//   } else {
//     items = JSON.parse(localStorage.getItem('items'));
//   }
//   return items;
// }

function showAlertDelete(alertDelete) {
  const divAlertDelete = document.createElement('div');
  divAlertDelete.className = 'alert alert-danger';
  divAlertDelete.appendChild(document.createTextNode(alertDelete));

  container.insertBefore(divAlertDelete, form);
  setTimeout(clearAlert, 3000);
}

function showAlertAdd(alertAdded) {
  const divAlertAdded = document.createElement('div');
  divAlertAdded.className = 'alert alert-success';
  divAlertAdded.appendChild(document.createTextNode(alertAdded));

  container.insertBefore(divAlertAdded, form);
  setTimeout(clearAlert, 3000);
}

function showAlertError (alertError) {
  const divAlertError = document.createElement('div');
  divAlertError.className = 'alert alert-warning';
  divAlertError.appendChild(document.createTextNode(alertError));

  container.insertBefore(divAlertError, form);
  setTimeout(clearAlert, 3000);
}

function clearAlert() {
  document.querySelector('.alert').remove();
}