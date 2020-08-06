import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function TodoItem(id, title = '', text = '', status = false) {
  this.id = id;
  this.title = title;
  this.text = text;
  this.status = status;
}


const store = new Vuex.Store({
  state: {
    todos: localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos')),
    showPopup: false,
  },
  mutations: {
    ADD_TODO: (state, data) => {
      state.todos.push(new TodoItem(state.todos.length, ...data));
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    REMOVE_TODO: (state, id) => {
      state.todos = state.todos.filter(item => {
        return item.id !== id;
      });
      state.todos = state.todos.map(function (value, index) {
        value.id = index;
        return value;
      })
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    POPUP_STATUS: (state) => {
      state.showPopup = !state.showPopup;
    },
    TODO_STATUS: (state, data) => {
      console.log(data.id, data.status);
    }
  },
  actions: {},
  getters: {
    GET_TODOS: (state) => {
      return state.todos;
    },
    GET_CHECK: function (state) {

      return function (itemId) {
        for (let i = 0; i < state.todos.length ; i++) {
          if (state.todos[i].id===itemId) {
            return state.todos[i].status
          }
         }
        }
      }
  },
});

export default store;

