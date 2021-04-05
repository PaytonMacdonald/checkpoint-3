import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor(task, listId, completed = false, checked, checkboxId = 'checkbox-' + generateId(), id = generateId(),) {
        this.task = task
        this.listId = listId
        this.completed = completed
        this.checked = checked
        this.checkboxId = checkboxId
        this.id = id
    }

    get Template() {
        return /*html*/`
        <li>
        <input type="checkbox" id="${this.checkboxId}" onclick="app.taskController.checkBox(); app.taskController.checkClick('${this.listId}', '${this.checkboxId}')" ${this.checked}> 
        ${this.task} 
        <i class="fas fa-times-circle text-danger" onclick="app.taskController.deleteTask('${this.id}', '${this.listId}');"></i>
        </li>
        `
    }
}