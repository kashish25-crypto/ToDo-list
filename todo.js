let inputbox = document.getElementById("todo-input");
let list = document.getElementById("todo-list");

function addtask(){
    if (inputbox.value === ""){
        alert("you must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
    }
    inputbox.value = "";
} 
