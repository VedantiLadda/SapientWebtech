// let bookList = [];
// function addBook() {
//     let book = {
//         name: $('#txtName').val(),
//         author: $('txtAuthor').val(),
//     };
//     bookList.push(book);
// }
// $('#btnAddBook').bind('click', addBook);
// $('#btnAddBook').addClass("btn btn-info form-control");
// $('#txtName').addClass("form-control");
// $('#txtAuthor').addClass("form-control");
//getting and setting value from input box, use val method
// let x=$('<input type ="text" id="test">');
// $('body').append(x);
// $('test').html('mmmm');
// function callbackFn(){
//     $('#para').toggle();
// }
// $('#btnAddBook').bind('click',callbackFn);

$(document).ready(() => {
    'use strict';
    const countryAPI = 'https://restcountries.eu/rest/v2/all';
    $('#ddlCountry').bind('change', function(){
        alert('this region is selected: '+this.value);
        const regionAPI = 'https://restcountries.eu/rest/v2/region/' + this.value;
        $.ajax({
            url: regionAPI,
            type: "GET",
            async: true,//default value
        }).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
    });
    function fetchCountries() {
        $.ajax({
            url: countryAPI,
            type: "GET",
            async: true,//default value
        }).then(result => {
            //console.log(result);
            bindCountries(result);
        }).catch(err => {
            console.log(err);
        });
    }
    function bindCountries(data) {
        data.forEach((x, i) => {
            //console.log(x.name);
            //console.log(x.alpha2Code);
            let option = $('<option/>').val(x.region).text(x.region);
            $('#ddlCountry').append(option);
        });
    }
    
    fetchCountries();
});
    
