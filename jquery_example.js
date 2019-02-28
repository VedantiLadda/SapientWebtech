(() => {
    'use strict';
    let bookList = [];
    function addBook() {
        let book = {
            name: $('#txtName').val(),
            author: $('txtAuthor').val(),
        };
        bookList.push(book);
    }
    $('#btnAddBook').bind('click', addBook);
    $('#btnAddBook').addClass("btn btn-info form-control");
    $('#txtName').addClass("form-control");
    $('#txtAuthor').addClass("form-control");
    //getting and setting value from input box, use val method
    // let x=$('<input type ="text" id="test">');
    // $('body').append(x);
    // $('test').html('mmmm');
    function callbackFn(){
        $('#para').toggle();
    }
    $('#btnAddBook').bind('click',callbackFn);
    
})();