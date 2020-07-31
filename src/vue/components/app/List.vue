<template lang="pug">
  #todo
    header.list__header
      h2.list__title List
      .list__nav
        button.list__button Add TODO
        button.list__button Change TODO
        button.list__button Remove TODO
    template
      ListItem(v-for="item in items")
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: "List.vue",
  components: {ListItem},
  data() {
    return {
      items: 0,
    }
  },
  mounted() {
    this.items = this.$store.state.todos
  }
}
</script>

<style lang="scss" scoped>
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
     @include breakpoint ($desktop__all) {
         &:hover {
           transform: scale(1.1);
         }
      }
  }
}
</style>
