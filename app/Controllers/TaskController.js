import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";
import { saveState } from "../Utils/LocalStorage.js";


function _checkbox() {

  for (let i = 0; i < ProxyState.tasks.length; i++) {
    let checkBox = document.getElementById(ProxyState.tasks[i].checkboxId)
    if (checkBox.checked == true) {
      ProxyState.tasks[i].completed = true
      ProxyState.tasks[i].checked = 'checked'
    }
    else {
      ProxyState.tasks[i].completed = false
      ProxyState.tasks[i].checked = ''
    }
  }
  saveState()
}

//Public
export default class TaskController {

  addTask(listId) {
    window.event.preventDefault()
    let form = window.event.target

    let newTask = {
      task: form['task'].value,
      listId: listId
    }
    taskService.addTask(newTask)
    // @ts-ignore
    form.reset()
  }


  deleteTask(taskId, listId) {
    taskService.deleteTask(taskId, listId)
  }

  checkBox() {
    _checkbox()
  }


  //completion functions

  addTaskTotal(listId) {
    taskService.addTaskTotal(listId)
  }
  removeTaskTotal(listId) {
    taskService.removeTaskTotal(listId)
  }

  checkClick(listId, checkBoxId) {
    taskService.checkClick(listId, checkBoxId)
  }

  checkDelete(listId, checkBoxId) {
    taskService.checkClick(listId, checkBoxId)
  }

}