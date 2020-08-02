import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function TodoItem(id, title = '', text = '', status = false) {
  this.id = id;
  this.title = title;
  this.text = text;
  this.status = status;
}


console.log(localStorage.getItem('todos'));
const store = new Vuex.Store({
  state: {
    todos: localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos')),
    showPopup: false,
  },
  mutations: {
    ADD_TODO: (state, data) => {
      const id = 1;
     // const id = state.todos.length;

      state.todos.push(new TodoItem(id, ...data));
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    REMOVE_TODO: (state, id) => {

      state.todos = state.todos.filter(item => {
        return item.id !== id;
      });
      state.todos = state.todos.map(function (e, i) {
        e.id = i;
      })

      console.log(state.todos);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    POPUP_STATUS: (state) => {
      state.showPopup = !state.showPopup;
    },
  },
  actions: {
    SET_STATUS: (state, data) => {
      console.log(data);
    },

  },
  getters: {
    GET_TODOS: (state) => {
      return state.todos;
    },

  },
});

export default store;

