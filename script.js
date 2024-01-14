const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === ""){
    alert("Please write the task!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
}

listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if (e.target.tagName === "SPAN"){
    let li = e.target.parentElement;
    listContainer.removeChild(li);
    saveData()
  }
});

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();