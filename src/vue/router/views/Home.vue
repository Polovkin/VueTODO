<template lang="pug">
  .container
    header
      h1 TODO List
    main.content
      List(:list-type="'list'")
      TodoPopup(v-if="popUp")
</template>

<script>
import List from '../../components/app/List.vue'

export default {
  name: 'Home',
  components: {List, },
  data() {
    return {

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
h1 {
  font-size: 80px;
  text-align: center;
   @include breakpoint ($phone__all) {
       font-size: 50px;
    }
}

</style>
