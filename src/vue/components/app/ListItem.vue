<template lang="pug">
  .list-item(:id="id")
    header.list-item__header(:class="{checked: checkComputed}")
      h3 {{ListData.title}}
      span # {{id}}
    .list-item__item-body
      p(v-if="!check") {{ListData.text}}
    footer.list-item__control(v-if="ListType!=='list'")
      .list-item__buttons
        button.list-item__button Change TODO
        button.list-item__button(@click="removeTodo") Remove TODO
      .list-item__status
        input.checkbox(
          :id="`check-${id}`"
          type="checkbox",
          v-model="check",
          @change="setStatus")
        label(:for="`check-${id}`")
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
    ListType: {
      type: String,
      default: 'list'
    },
  },
  data() {
    return {
      check: '',
      id: this.ListData.id + 1,
    }
  },
  computed:{
    checkStatus(){
      return  this.$store.get('TODO_STATUS', {id: this.id, status: this.check})
    },
    checkComputed() {
      return this.check = this.$store.getters.GET_CHECK(this.ListData.id)
    }
  },
  methods: {
    setStatus() {
      this.$store.commit('TODO_STATUS', {id: this.id, status: this.check})
    },
    removeTodo() {
      this.$store.commit('REMOVE_TODO', (this.ListData.id))
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

  &__status {
    .checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
      margin: 10px 0 0 20px;

      & + label {
        position: relative;
        padding: 0 0 0 60px;
        cursor: pointer;

        &:before {
          @include pseudoElement(30px);
          top: -4px;
          left: 0;
          transition: .2s;
          border: 1px solid black;
        }

        &:after {
          @include pseudoElement(20px);
          transform: translate(-50%, -50%);
          top: 11px;
          left: 15px;
          background: white;
          transition: .2s;
        }
      }

      &:checked + label {
        &:after {
          background: $color__primary;
        }

        &:before {
          border-color: green;
        }
      }

    }
  }

  &__header {
    @extend %flex-row-between;
    width: 100%;
    align-items: center;
    position: relative;

    &.checked {
      &:after {
        @include pseudoElement(100%);
        top: 50%;
        left: 0;
        height: 2px;
        background-color: black;
      }
    }


    span {
      font: {
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
