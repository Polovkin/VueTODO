<template lang="pug">
  #todo
    header.list__header
      h2.list__title Спикок задач
      .list__buttons(v-if="ListType==='list'")
        router-link.btn-revert(to="/change") Редактирование
      .list__buttons(v-else)
        button.list__button(@click="addTodo") Add TODO
        router-link.btn-revert(to="/") На главную
    .list__body
      template(v-if="todos.length")
        ListItem(v-for="item in todos", :list-data="item", :list-type="ListType", :key="item.id")
      h2.error(v-else) Нету задач
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: "List.vue",
  props: {
    ListType: {
      type: String,
      default: 'List'
    },
  },
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

}

#todo {
  position: relative;
  height: 100%;
}

.content {
  height: calc(100vh - 92px);
}

.error {
  text-align: center;
  transform: translate(-50%, -50%);
  top: 20%;
  left: 50%;
  position: absolute;
}

.list {
  &__body {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__header {
    @extend %flex-row-between;
    align-items: center;
    justify-content: space-between;
    @include breakpoint($phone__all) {
      flex-direction: column;
      align-items: center;
    }

  }

  &__nav {
    @extend %flex-row-between;
    align-items: center;
  }

  &__buttons {


    @extend %flex-row-between;
    align-items: center;
  }
}
</style>
