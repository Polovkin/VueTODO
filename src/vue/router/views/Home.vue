<template lang="pug">
  .container
    header
      h1 TODO list
      router-link(to="/change") change
    main.content
      List
      TodoPopup(v-if="popUp")
</template>

<script>
import TodoPopup from "../../components/app/TodoPopup.vue";
import List from '../../components/app/List.vue'

export default {
  name: 'Home',
  components: {List, TodoPopup},
  data() {
    return {
      showPopup: '',
    };
  },
  computed: {
    popUp() {
     return this.$store.state.showPopup;
    }
  },
};
</script>

<style lang="scss">


</style>
