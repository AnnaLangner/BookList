const container = document.querySelector('.container');
const form = document.getElementById('book-form');
const table = document.getElementById('table');
const bookTitle = document.getElementById('exampleInputBookTitle');
const bookAuthor = document.getElementById('exampleInputAuthor');
const bookIsbn = document.getElementById('exampleInputISBN');
const tableBody = document.getElementById('table-body');
const btnSubmit = document.getElementById('btn-submit');

class Book {
  constructor (bookTitle, bookAuthor, bookIsbn) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookIsbn = bookIsbn;
  }    
}

class UI {
  addBookToList(book) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.bookTitle}</td>
    <td>${book.bookAuthor}</td>
    <td>${book.bookIsbn}</td>
    <td><a href="#" class="remove-btn text-danger">X</a></td>
    `;
    tableBody.appendChild(row);  
  }

  clearFields() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookIsbn.value = '';
  }

  showAlert(alert, className) {
    const divAlert = document.createElement('div');
    divAlert.className = `alert ${className}`;
    divAlert.appendChild(document.createTextNode(alert));
  
    container.insertBefore(divAlert, form);
  
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if(target.classList.contains("remove-btn")) {
      target.parentElement.parentElement.remove(); 
      return true;
    } else {
      return false;
    }
  }
}

form.addEventListener('submit', addBookItem);

function addBookItem(e) {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const isbn = bookIsbn.value;  
  const ui = new UI();

  if(title === '' || author === '' || isbn === '') {
    ui.showAlert('Pleas complete all fields',  'alert-warning');
    return;
  } 

  const book = new Book (title, author, isbn);

  ui.addBookToList(book);
  ui.clearFields();
  ui.showAlert('This item has been added',  'alert-success'); 

   e.preventDefault();
}

tableBody.addEventListener('click', function(e) {  
  const ui = new UI;
  const result = ui.deleteBook(e.target);

  if(result === true) {
    ui.showAlert('This item has been deleted',  'alert-danger');
  } 

  e.preventDefault();
});