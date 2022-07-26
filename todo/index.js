const title = document.getElementById("input")
const desc = document.getElementById("description")
const form = document.querySelector("form")
const container = document.querySelector(".container")

let tasks = localStorage.getItem('tasks') ?
  JSON.parse(localStorage.getItem('tasks')) : []

showAllTasks()

function showAllTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute('id', "tasks")

    const innerDiv = document.createElement("div");
    const p = document.createElement("p");
    const span = document.createElement("span");

    p.innerText = value.title
    span.innerText = value.description

    innerDiv.appendChild(p)
    innerDiv.appendChild(span)

    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "deleteBtn")

    delBtn.innerText = "-"

    delBtn.addEventListener("click", () => {
      removeTasks()
      tasks.splice(index, 1)
      showAllTasks();
    })

    div.appendChild(innerDiv)
    div.appendChild(delBtn)
    container.append(div)

  })
}

const removeTasks = () => {
  tasks.forEach(() => {
    const div = document.querySelector('#tasks')
    div.remove();
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  removeTasks();
  tasks.push({
    title: title.value,
    description: desc.value
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
  showAllTasks()
  desc.value = " "
  title.value = " "
})