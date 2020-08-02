import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function TodoItem(id, title = '', text = '', status = false) {
  this.id = id;
  this.title = title;
  this.text = text;
  this.status = status;
}

function checkStorage () {}
const store = new Vuex.Store({
  state: {
    todos: localStorage.getItem('todos')===null ? [] : JSON.parse(localStorage.getItem('todos')),
    showPopup: false,
  },
  mutations: {
    ADD_TODO: (state, data) => {
      const id = state.todos.length + 1;

      state.todos.push(new TodoItem(id, ...data));
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    REMOVE_TODO: (state,id) => {
      console.log(id)
      console.log(state.todos[id-1].id);
      //state.todos.splice(0,id-1)
      //localStorage.setItem('todos', JSON.stringify(state.todos));
      //console.log(localStorage.getItem('todos')[id])
    },
    POPUP_STATUS: (state) => {
      state.showPopup = !state.showPopup;
    },
  },
  actions: {
    SET_STATUS: (state,data) => {
      console.log(data);
    }
  },
  getters: {
    GET_TODOS: (state) => {
      return state.todos;
    },

  },
});

export default store;

