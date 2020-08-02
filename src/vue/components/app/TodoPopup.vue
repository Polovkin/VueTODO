<template lang="pug">
  #todoPopup
    .todoPopup__inputs
      label Заголовок
        input(v-model="title")
      label Текст
        input(v-model="text")
    .todoPopup__buttons
      button.btn-main(@click="submit") Подтвердить
      button.btn-main(@click="cancel") Отменить

</template>

<script>
export default {
  name: "TodoPopup",
  data() {
    return {
      text: '',
      title: '',
    }
  },
  methods: {
    cancel() {
      this.$store.commit('POPUP_STATUS');
    },
    submit() {
      this.$store.commit('ADD_TODO', [this.text, this.title, false]);
      this.$store.commit('POPUP_STATUS');
    }
  },

}

</script>

<style scoped
       lang="scss">
#todoPopup {
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 29px;
  top: 30%;
  left: 50%;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: $color__light;
  border: 1px solid black;

  .todoPopup {
    &__inputs {
      @extend %flex-column-center;

      & > label {
        @extend %flex-column-center;
      }
    }

    &__buttons {
      width: 70%;
      @extend %flex-row-between;
    }
  }
}
</style>
