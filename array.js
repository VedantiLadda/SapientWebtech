

// var x;
// var y;
// var text = "";

// for(x of person){
//     for(y in x){
//         text += x[y]+ " ";
//     }
// }
// console.log(text);

//create a row, which means tr
//create a column, which means td

(function () {
    'use strict'
    var students = [{ name: "Vedanti", age: "21" },
    { name: "Sophie", age: "29" },
    { name: "Chris", age: "34" },
    { name: "Leah", age: "27" },
    {age: "35" ,  name: "Lucy" }];
    var columnNames=[];
    function createElement(elementType) {
        return document.createElement(elementType);
    }
    function getElement(elementID){
        return document.getElementById(elementID);
    }
    function createHeaderRow() {
        var headerRow = createElement('tr');
        for(var i in students[0]){
            var column = createElement('td');
            column.innerHTML=i;
            headerRow.appendChild(column);
            columnNames.push(i);
        }
        var del = createElement('td');
        del.innerHTML = 'delete'
        headerRow.appendChild(del);
        console.log(headerRow);
        return headerRow;
    }
    function createDataRow(x) {
        var dataRow = createElement('tr');
        for (var columns in columnNames) {
            var dataColumn = createElement('td');
            dataColumn.innerHTML = students[x][columnNames[columns]];
            dataRow.appendChild(dataColumn);
        }
        var buttontd = createElement('td');
        var button = createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-info');
        button.innerHTML = "-";
        buttontd.appendChild(button);
        dataRow.appendChild(buttontd);
        console.log(dataRow);
        return dataRow;
    }
    function createTable(){
        var table = getElement('tblEmployees');
        var tbody = getElement('tbody');
        var thead = getElement('thead');
        // table.style.width = '20%';
        // table.setAttribute('border', '1');
        table.classList.add('table');
        table.classList.add('table-striped');
        thead.appendChild(createHeaderRow());
        for(var i=0;i<students.length;i++){
            tbody.appendChild(createDataRow(i));
        }
        var buttons = document.getElementsByClassName('btn');
        for(var r=0;r<buttons.length;r++){
            buttons[r].addEventListener('click',function(){
                this.parentNode.parentNode.remove();
            })
        }
    }
    createTable();
    function deleteItem(){

    }
})();