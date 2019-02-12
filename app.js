var input = document.getElementsByClassName("items")[0];
var myList = document.getElementsByClassName("grocery")[0];
var button = document.getElementsByTagName("button")[0];

function createListElement(){
    //create <li> node
    var list = document.createElement("li");

    // create a  text node
    // Append the text to the child </li>
    list.appendChild(document.createTextNode(input.value));
        
    // Append the child to the parent
    myList.appendChild(list); 
    input.value = ''; 
}

button.addEventListener("click", function(){
    if (input.value.length > 0){
      createListElement();   
    }
});

input.addEventListener("keypress", function(){
    if (input.value.length > 0 && event.keyCode === 13){
        createListElement(); 
    }
});