<template lang="pug">
  .container
    header
      h1 TODO List
    main.content
      List(:list-type="'change'")
      TodoPopup(v-if="popUp")

</template>

<script>
import TodoPopup from "../../components/app/TodoPopup.vue";
import List from '../../components/app/List.vue'

export default {
  name: 'Change',
  components: {List, TodoPopup},
  data() {
    return {};
  },
  methods: {

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
        arr.push(new TodoItem(i, 'заголовок' + i, 'текст' + i, false));
        localStorage.setItem('todos', JSON.stringify(arr));
      }
    },
  },

  computed: {
    todos() {
      return this.$store.getters.GET_TODOS;
    },
    popUp() {
      return this.$store.state.showPopup;
    }
  }
};
</script>

<style lang="scss">


</style>
