<template lang="pug">
  #todo
    header.list__header
      h2.list__title List
      .list__nav
        button.list__button(@click="addTodo") Add TODO
        //button(@click="clear") clear
        //button(@click="add") add 4
    template
      ListItem(v-for="item in todos", :list-data="item")

</template>

<script>
import ListItem from './ListItem.vue'
import {mapGetters} from 'vuex';

export default {
  name: "List.vue",
  components: {ListItem},
  data() {
    return {
      items: 0,
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('POPUP_STATUS');
    },
    clear() {
      localStorage.clear();
      console.log(localStorage.getItem('todos'));
    },
    add() {
      function TodoItem(id, title = '', text = '', status = false) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.status = status;
      }
      let arr = []
      for (let i = 0; i < 4; i++) {
        arr.push(new TodoItem(i,'заголовок'+ i,'текст' +i,false));
        localStorage.setItem('todos', JSON.stringify(arr));
      }
    },
  },

  computed: {
    todos() {
      return this.$store.getters.GET_TODOS;
    }
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
button {
  border: 1px solid black;
  padding: 10px;
  margin: 2px;
}
  & > .container {
    padding-top: 100px;
    min-height: inherit;
  }
}

#todo {
  position: relative;
}

.list {
  &__header {
    @extend %flex-row-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  &__nav {
    @extend %flex-row-between;
    align-items: center;
  }

  &__button {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px 20px;
    background-color: $color__primary;
    color: $color__light;
    font-weight: bold;
    transition: all $animation-fast;
    border: {
      radius: 10px;
    };
    @include breakpoint($desktop__all) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
