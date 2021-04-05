import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor(name = 'new list', color, id = generateId(), taskTotal = 0, completed = 0) {
        this.name = name
        this.color = color
        this.id = id
        this.taskTotal = taskTotal
        this.completed = completed
    }

    get Template() {

        return /*html*/`
            <div class="col-4 py-3">
                <div class="card">
                    <div class="card-header text-center text-white ${this.color}">
                        <h4 class="mb-3">${this.name} <i class="far fa-times-circle" onclick="app.listController.deleteList('${this.id}');"></i></h4>
                        <span id="completed-${this.id}"> ${this.completed} </span>
                        <span> | </span>
                        <span id="total-${this.id}"> ${this.taskTotal} </span>
                    </div>
                    <div class="card-body">
                        <!--sub-insert-->
                        <ul class="form-check" id="task">
                        ${this.Task}
                        </ul>
                        <!-------------->
                        <br>
                        <div class="">
                            <form onsubmit="app.taskController.addTask('${this.id}'); app.taskController.addTaskTotal('${this.id}')">
                                <div class="form-row align-items-center">
                                    <div class="col-9 col-md-8 my-1">
                                        <input type="text" id="task" class="form-control" id="inlineFormInputName"
                                            placeholder="Add New Task" minlength="3" maxlength="50" required>
                                    </div>
                                    <div class="col-1 my-1">
                                        <button type="submit" class="btn btn-primary">
                                        <i class="fas fa-plus"></i></button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        `
    }


    get Task() {
        let task = ProxyState.tasks.filter(i => i.listId === this.id)
        let template = ''
        task.forEach(i => template += i.Template)
        return template
    }


}


