// var textBox = document.getElementById('textBox1');
// textBox.type = "checkbox";
// textBox.name = "test";
// textBox.readOnly = true;
// var containerDiv = document.getElementById('container');
// var label = document.createElement('label');
// label.id = "lblFirstName";
// label.innerHTML="Welcome";
// containerDiv.appendChild(label);
(function (){
"use strict"
var submitButton = document.getElementById('submit');
submitButton.addEventListener("click", createPost);
var myPosts = [{text:'',time:''}];
function createPost(){
    var container = document.getElementById('addPost');
    var postText = document.getElementById('post');
    container.innerHTML='';
    myPosts.push({text:postText.value,time:new Date()});
    for (var i = myPosts.length - 1; i >= 0; i--) {

        var myCard = `<div class="card">
                    <div class="card-body">
                        ${myPosts[i].text} ${myPosts[i].time}
                    </div>
                </div>`;

        container.innerHTML += myCard;
    }
    postText.value = '';
    postText.placeholder = "Type Something";
}
})();