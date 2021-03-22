// reference : https://github.com/CaloloCosta/todoListAPP/blob/master/app.js

function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = ` 
            <span class="delete"> 
                x 
            </span> 
            <input type="checkbox" class="tick"> 
            <label> 
                ${task} 
            </label> 
    `
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

function add(event) {
    event.preventDefault();
    let task_to_add = document.querySelector("input");
    if (task_to_add.value != "") {
        add_task(task_to_add.value);
    }
    task_to_add.value = "";
}

function add_task(task) {
    let list = document.querySelector("ul");
    let li_add = document.createElement("li");
    li_add.innerHTML = ` 
            <span class="delete"> 
                x 
            </span> 
            <input type="checkbox" class="tick"> 
            <label> 
                ${task} 
            </label> 
    `
    list.appendChild(li_add);
    document.querySelector(".tasksBoard").style.display = "block";
}

function clear_task_board(event) {
    let list = document.querySelector("ul");
    list.innerHTML = "";
    document.querySelector(".tasksBoard").style.display = "none";
}

function delete_task(event) {
    let li_to_remove = event.target.parentNode;
    let ul = li_to_remove.parentNode;
    ul.removeChild(li_to_remove);
    if (ul.childElementCount == 0) {
        document.querySelector(".tasksBoard").style.display = "none";
    }
}

function tick_task(event) {
    let task_label = event.target.nextSibling.nextSibling;
    if (event.target.checked) {
        task_label.style.textDecoration = "line-through";
        task_label.style.color = "#ff0000";
    } else {
        task_label.style.textDecoration = "none";
        task_label.style.color = "#2f4f4f";
    }
}

function del_or_tick(event) {
    if (event.target.className == "delete") {
        delete_task(event);
    } else {
        tick_task(event);
    }
}

function load_event() {
    document.querySelector("form").addEventListener("submit", add);
    document.getElementById("clear").addEventListener("click", clear_task_board);
    document.querySelector("ul").addEventListener("click", del_or_tick);
}

load_event();