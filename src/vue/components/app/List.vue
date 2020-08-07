<template lang="pug">
  #todo
    header.list__header
      h2.list__title Спикок задач
      .list__buttons(v-if="ListType==='list'")
        router-link(to="/change") Изменить
      .list__buttons(v-else)
        button.list__button(@click="addTodo") Add TODO
        router-link(to="/") На главную

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

  &__buttons {
    a {
      margin-right: 1rem;
    }

    @extend %flex-row-between;
    align-items: center;
  }
}
</style>
