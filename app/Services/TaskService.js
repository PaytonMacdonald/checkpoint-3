import { ProxyState } from "../AppState.js";
import ListController from "../Controllers/ListController.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TaskService {
  addTask(newTask) {
    ProxyState.tasks.push(new Task(newTask.task, newTask.listId))
    saveState()
    ProxyState.tasks = ProxyState.tasks

  }


  addCompleted(listId) {

    for (let i = 0; i < ProxyState.lists.length; i++) {
      if (listId == ProxyState.lists[i].id) {
        ProxyState.lists[i].completed += 1
        saveState()
        document.getElementById('completed-' + ProxyState.lists[i].id).innerText = ProxyState.lists[i].completed
      }
    }

  }

  deleteTask(taskId, listId) {
    if (window.confirm("Do you really want to delete this?")) {
      ProxyState.tasks = ProxyState.tasks.filter(i => i.id != taskId)



      for (let i = 0; i < ProxyState.lists.length; i++) {
        if (listId == ProxyState.lists[i].id) {
          ProxyState.lists[i].taskTotal -= 1
          if (ProxyState.lists[i].completed > 0) {
            ProxyState.lists[i].completed -= 1
          }
          document.getElementById('total-' + ProxyState.lists[i].id).innerText = ProxyState.lists[i].taskTotal
          document.getElementById('completed-' + ProxyState.lists[i].id).innerText = ProxyState.lists[i].completed
        }
      }
      saveState()
    }
  }


  //completion functions
  addTaskTotal(listId) {

    for (let i = 0; i < ProxyState.lists.length; i++) {
      if (listId == ProxyState.lists[i].id) {
        ProxyState.lists[i].taskTotal += 1
        saveState()
        document.getElementById('total-' + ProxyState.lists[i].id).innerText = ProxyState.lists[i].taskTotal
      }
    }

  }





  removeTaskTotal(listId) {

    for (let i = 0; i < ProxyState.lists.length; i++) {
      if (listId == ProxyState.lists[i].id) {
        document.getElementById('total-' + ProxyState.lists[i].id).innerText = ProxyState.lists[i].taskTotal
        ProxyState.lists[i].taskTotal -= 1
        saveState()
      }
    }
  }


  checkClick(listId, checkBoxId) {
    console.log('using ' + checkBoxId)
    for (let i = 0; i < ProxyState.lists.length; i++) {
      if (listId == ProxyState.lists[i].id) {
        console.log('found the list')
        let taskComplete = ProxyState.lists[i].completed
        console.log('first ' + taskComplete)

        for (let i = 0; i < ProxyState.tasks.length; i++) {

          if (checkBoxId == ProxyState.tasks[i].checkboxId) {
            console.log('found the checkbox')
            let checkBox = document.getElementById(ProxyState.tasks[i].checkboxId)

            if (checkBox.checked == true) {
              console.log('box is checked at ' + ProxyState.tasks[i].task)
              taskComplete++
            }
            else {
              console.log('box is not checked at ' + ProxyState.tasks[i].task)
              taskComplete--
            }
          }
        }
        console.log('last ' + taskComplete)
        ProxyState.lists[i].completed = taskComplete
        saveState()
        document.getElementById('completed-' + ProxyState.lists[i].id).innerText = ProxyState.lists[i].completed
      }
    }
  }




  checkDelete(listId, checkBoxId) {

    for (let i = 0; i < ProxyState.lists.length; i++) {
      if (listId == ProxyState.lists[i].id) {

        console.log('found the list')
        let taskComplete = ProxyState.lists[i].completed
        console.log('first ' + taskComplete)

        for (let i = 0; i < ProxyState.tasks.length; i++) {

          if (checkBoxId == ProxyState.tasks[i].checkboxId) {
            console.log('found the checkbox')
            let checkBox = document.getElementById(ProxyState.tasks[i].checkboxId)

            if (checkBox.checked == true) {
              console.log('box is checked at ' + ProxyState.tasks[i].task)
              taskComplete--
            }

          }
        }
        console.log('last ' + taskComplete)
        ProxyState.lists[i].completed = taskComplete
        saveState()
        document.getElementById('completed-' + ProxyState.lists[i].id).innerText = ProxyState.lists[i].completed
      }
    }
  }





}

export const taskService = new TaskService();
