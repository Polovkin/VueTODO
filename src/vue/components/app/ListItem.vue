<template lang="pug">
  .list__item(:id="ListData.id")
    h3 {{ListData.title}}
    p {{ListData.text}}
    label
      input(type="checkbox", v-model="test", @change="setStatus")
    button.list__button Change TODO
    button.list__button(@click="removeTodo") Remove TODO
</template>

<script>
export default {
  name: "ListItem.vue",
  props: {
    complete: {
      type: Boolean,
      default: false,
    },
    ListData: {
      type: Object
    },
  },
  data() {
    return {
      test: this.complete,
    }
  },
  mounted() {
   // console.log(this.ListData);
  },
  methods: {
    setStatus() {
      this.$store.dispatch('SET_STATUS',[this.ListData.id,this.test])
    },
    removeTodo() {
      this.$store.commit('REMOVE_TODO',(this.ListData.id))
    }
  },
}
</script>

<style lang="scss"
       scoped>
.list {
  &__item {
    @extend %flex-row-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    border: {
      color: $color__primary;
      radius: 20px;
      width: 2px;
      style: solid;
    };
    margin-bottom: 1rem;
  }
}
</style>
