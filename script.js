function checkEmptyList() {
  var taskList = document.getElementById("task_list");
  if (taskList.childElementCount === 0) {
    // List is empty
    taskList.classList.remove("non-empty");
    taskList.classList.add("empty");
    console.log("To-do list is empty.");
  } else {
    // List has tasks
    console.log("To-do list is not empty.");
  }
}
function createTaskElement(text){
  var li=document.createElement("li");
  var ele=document.createTextNode(text);
  li.appendChild(ele);
  var Ed_btn=document.createElement("button");
  Ed_btn.innerHTML="edit";
  Ed_btn.style.backgroundColor="yellow"
  Ed_btn.style.cursor="pointer";
  li.appendChild(Ed_btn);
  Ed_btn.onclick = function(){
    edit_task(li);
    console.log("edit_now");
  }
  var del_btn=document.createElement("button");
  del_btn.innerHTML="delete";
  li.appendChild(del_btn);
  del_btn.style.backgroundColor="red"
  del_btn.style.cursor="pointer";
  del_btn.onclick=function(){
    delete_task(li);
    console.log("delete_now");
  }
  return li;
}
function update_list(){
  var task=document.getElementById("input_text");
  var list=document.getElementById("task_list");
  if(task.value!=""){
    var ele=createTaskElement(task.value+"        ");
    list.appendChild(ele);
    task.value="";
    list.classList.remove("empty");
    list.classList.add("non-empty");
  }
}
function edit_task(ele){
  var newTaskText = prompt("Enter new task text:");
    if (newTaskText !== null) {
      ele.firstChild.nodeValue = newTaskText+"    ";
    }
    checkEmptyList();
  }
function delete_task(ele){
  if(confirm("Are you done with the task??")){
    ele.parentNode.removeChild(ele);
  }
  checkEmptyList();
}