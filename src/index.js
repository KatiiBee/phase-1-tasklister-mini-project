document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  let text= document.querySelector('#new-task-description')
  let tasks= document.querySelector('#tasks')
  form.addEventListener ('submit', makeNewTask)
  function makeNewTask(event){
    event.preventDefault()
    let li = document.createElement('li')
    let btn= document.createElement('button')
    li.textContent = text.value
    btn.textContent = 'x'
    btn.addEventListener('click', deleteButton)
    tasks.appendChild(li)
    li.appendChild (btn)

  }
function deleteButton (event){
  event.target.parentNode.remove()
}
});
