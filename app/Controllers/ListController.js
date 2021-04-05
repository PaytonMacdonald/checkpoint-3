import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";


//Private
function _draw() {
  let lists = ProxyState.lists;
  let template = ''
  lists.forEach(list => { template += list.Template })
  // render to page
  document.getElementById('list').innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    ProxyState.on("lists", _draw);
    ProxyState.on("tasks", _draw);
    loadState()
    _draw()
  }

  addList() {
    window.event.preventDefault()
    let form = window.event.target

    let newList = {
      name: form['name'].value,
      color: form['color'].value,
    }

    listService.addList(newList)
    // @ts-ignore
    form.reset()
  }

  deleteList(id) {
    listService.deleteList(id)
  }


}
