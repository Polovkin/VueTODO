<template lang="pug">
  .list-item(:id="ListData.id")
    header.list-item__header
      h3 {{ListData.title}}
      span # {{ListData.id}}
    section.list-item__item-body
      p {{ListData.text}}

    footer.list-item__control
      .list-item__buttons
        button.list-item__button Change TODO
        button.list-item__button(@click="removeTodo") Remove TODO
      .list-item__status
        label(for="todostatus")
          input#todostatus(type="checkbox", v-model="test", @change="setStatus")
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
.list-item {

    @extend %flex-column-start;
    width: 100%;
    padding: 20px;
    border: {
      color: $color__primary;
      radius: 20px;
      width: 2px;
      style: solid;
    };
    margin-bottom: 1rem;

  &__header {
    @extend %flex-row-between;
    width: 100%;
    align-items: center;
    span {
      font:  {
        weight: bold;
        size: 30px;
      };
    }
  }
  &__body {
    @extend %flex-column-start;
    label {
      background-color: rebeccapurple;
    }
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
  &__control {
    width: 100%;
    @extend %flex-row-between;
    align-items: center;
  }
}

</style>
