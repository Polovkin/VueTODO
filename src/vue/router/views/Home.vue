<template lang="pug">
  .container
    header
      h1 TODO list
      router-link(to="/change") change
    main.content
      List
</template>

<script>

  import List from '../../components/app/List.vue'
  export default {
    name: 'Home',
    components: {List},
    data() {
      return {

      };
    },

  };
</script>

<style lang="scss">


</style>
