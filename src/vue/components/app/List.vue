<template lang="pug">
  #todo
    header.list__header
      h2.list__title List
      .list__nav
        button.list__button(@click="addTodo") Add TODO

    template
      ListItem(v-for="item in items", :list-data="item")

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
    }
  },

  mounted() {
    this.items = this.$store.getters.GET_TODOS;
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
