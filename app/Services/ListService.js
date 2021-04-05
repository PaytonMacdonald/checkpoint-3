import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListService {
  addList(newList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList.name, newList.color)]
    saveState()
  }
  deleteList(id) {
    if (window.confirm("Do you really want to delete this?")) {
      ProxyState.lists = ProxyState.lists.filter(i => i.id != id)
      saveState()
    }
  }

}

export const listService = new ListService();

