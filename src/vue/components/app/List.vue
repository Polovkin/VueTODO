<template lang="pug">
  #todo
    header.list__header
      h2.list__title Спикок задач
      .list__buttons(v-if="ListType==='list'")
        router-link.btn-revert(to="/change") Изменить
      .list__buttons(v-else)
        button.list__button(@click="addTodo") Add TODO
        router-link.btn-revert(to="/") На главную

    template
      ListItem(v-for="item in todos", :list-data="item", :list-type="ListType", :key="item.id")

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
}

.list {
  &__header {
    @extend %flex-row-between;
    align-items: center;
    justify-content: space-between;
     @include breakpoint ($phone__all) {
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
