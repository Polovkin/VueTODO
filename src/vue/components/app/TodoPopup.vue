<template lang="pug">
  .bg
    #todoPopup
      .todoPopup__inputs
        label Заголовок
          input(v-model="title", required)
        label Описание
          textarea(v-model="text", rows=5)
        p(v-if="required") Заполните все поля
      .todoPopup__buttons
        button(@click="submit") Подтвердить
        button.btn-revert(@click="cancel") Отменить

</template>

<script>
export default {
  name: "TodoPopup",
  data() {
    return {
      text: '',
      title: '',
      required: false,
      change: false,
    }
  },
  mounted() {
    for (let key in this.$store.state.popupData) {
      this[key] = this.$store.state.popupData[key];
    }
  },
  methods: {
    cancel() {
      this.$store.commit('POPUP_STATUS');
    },
    submit() {
      if (this.text && this.title && !this.change) {
        this.$store.commit('ADD_TODO', [this.title, this.text, false]);
        this.$store.commit('POPUP_STATUS');
        this.required = false;
      } else if (this.text && this.title && this.change) {
        this.$store.commit('CHANGE_TODO', {text: this.text, title: this.title});
        this.$store.commit('POPUP_STATUS');
      } else {
        this.required = true;
      }
    },
  }
}

</script>

<style scoped
       lang="scss">
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color__dark, .5);
}

#todoPopup {
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 29px;
  top: 30%;
  left: 50%;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: $color__light;
  border: 2px solid $color__primary;

  .todoPopup {
    &__inputs {
      @extend %flex-column-center;
      width: 80%;

      & > label {
        color: $color__font--secondary;
        font-weight: bold;
        padding-top: 10px;
        width: 100%;
        @extend %flex-column-center;
        font-size: 20px;

        input, textarea {
          margin-top: 10px;
          width: inherit;
          border: 1px solid $color__primary;
          color: $color__font--secondary;
        }


        textarea {

          resize: none;
        }
      }
    }

    &__buttons {
      margin-top: 1rem;
      width: 80%;
      @extend %flex-row-between;
    }
  }
}
</style>
