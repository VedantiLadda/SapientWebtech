function getElem(elementID) {
    return document.getElementById(elementID);
    // document.querySelector('#id');
}
function editRow(no) {
    getElem("edit_button" + no).style.display = "none";
    getElem("save_button" + no).style.display = "inline-block";

    var author = getElem("author_row" + no);
    var book = getElem("book_row" + no);
    var date = getElem("date_row" + no);

    var author_data = author.innerHTML;
    var book_data = book.innerHTML;
    var date_data = date.innerHTML;

    author.innerHTML = "<input type='text' class= 'form-control' id='author_text" + no + "' value='" + author_data + "'>";
    book.innerHTML = "<input type='text' class= 'form-control' id='book_text" + no + "' value='" + book_data + "'>";
    date.innerHTML = "<input type='date' class= 'form-control' id='date_text" + no + "' value='" + date_data + "'>";
}

function saveRow(no) {
    var author_val = getElem("author_text" + no).value;
    var book_val = getElem("book_text" + no).value;
    var date_val = getElem("date_text" + no).value;

    getElem("author_row" + no).innerHTML = author_val;
    getElem("book_row" + no).innerHTML = book_val;
    getElem("date_row" + no).innerHTML = date_val;

    getElem("edit_button" + no).style.display = "inline-block";
    getElem("save_button" + no).style.display = "inline-block";
}

function deleteRow(no) {
    getElem("row" + no + "").outerHTML = "";
}

function addRow() {
    var author = getElem("new_author");
    var new_author = author.value;
    var book = getElem("new_book");
    var new_book = book.value;
    var date = getElem("new_date");
    var new_date = date.value;

    var table = getElem("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='author_row" + table_len + "'>" + new_author + "</td><td id='book_row" + table_len + "'>" + new_book + "</td><td id='date_row" + table_len + "'>" + new_date + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='editRow(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='saveRow(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='deleteRow(" + table_len + ")'></td></tr>";

    getElem("new_author").value = "";
    getElem("new_book").value = "";
    getElem("new_date").value = "";
}