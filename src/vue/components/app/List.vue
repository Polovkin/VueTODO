<template lang="pug">
  #todo
    header.list__header
      h2.list__title Спикок задач
      button изменить
    template
      ListItem(v-for="item in todos", :list-data="item", :list-type="ListType")

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
