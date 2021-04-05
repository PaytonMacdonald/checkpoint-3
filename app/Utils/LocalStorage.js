import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";


export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    ProxyState.lists = data.lists.map(i => new List(i.name, i.color, i.id, i.taskTotal, i.completed));
    ProxyState.tasks = data.tasks.map(i => new Task(i.task, i.listId, i.completed, i.checked, i.checkboxId, i.id,));
  }
}






