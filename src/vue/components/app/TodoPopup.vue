<template lang="pug">
  #todoPopup
    .todoPopup__inputs
      label Заголовок
        input(v-model="title", required)
      label Описание
        textarea(v-model="text", rows=5)
      p(v-if="required") Заполните все поля
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
      required: false,
    }
  },
  methods: {
    cancel() {
      this.$store.commit('POPUP_STATUS');
    },
    submit() {
      if (this.text && this.title) {
        this.$store.commit('ADD_TODO', [this.title,this.text,  false]);
        this.$store.commit('POPUP_STATUS');
        this.required = false;
      } else {
        this.required = true;
      }
    },
  }
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
        textarea {
          resize: none;
        }
      }
    }

    &__buttons {
      width: 70%;
      @extend %flex-row-between;
    }
  }
}
</style>
