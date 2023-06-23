import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/constants'
// export const ActionTypes = {
//   ADD_TODO: 'ADD_TODO',
//   DELETE_TODO: 'DELETE_TODO',
//   TOGGLE_TODO: 'TOGGLE_TODO',
// };

export function addTodoItem(text) {
  AppDispatcher.dispatch({
    type: ActionTypes.ADD_TODO,
    text,
  });
}

export function deleteTodoItem(id) {
  AppDispatcher.dispatch({
    type: ActionTypes.DELETE_TODO,
    id,
  });
}

export function toggleTodoItem(id) {
  AppDispatcher.dispatch({
    type: ActionTypes.TOGGLE_TODO,
    id,
  });
}
