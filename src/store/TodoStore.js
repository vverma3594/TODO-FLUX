import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/constants'

const CHANGE_EVENT = 'change';

let todos = [];

function addTodoItem(text) {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  };
  todos.push(newTodo);
}

function deleteTodoItem(id) {
  todos = todos.filter(todo => todo.id !== id);
}

function toggleTodoItem(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
}

class TodoStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      switch (action.type) {
        case ActionTypes.ADD_TODO:
          addTodoItem(action.text);
          this.emitChange();
          break;
        case ActionTypes.DELETE_TODO:
          deleteTodoItem(action.id);
          this.emitChange();
          break;
        case ActionTypes.TOGGLE_TODO:
          toggleTodoItem(action.id);
          this.emitChange();
          break;
        default:
          break;
      }
    });
  }

  getAllTodos() {
    return todos;
  }


  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  
}


const todoStore = new TodoStore();
export default todoStore;
