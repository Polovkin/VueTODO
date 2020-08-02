<template lang="pug">

  main#app
    router-view
</template>

<script>
  import Home from "./router/views/Home.vue";
  export default {
    name: 'App',
    components: {Home},
    data() {
      return {

      }

    },
    computed: {

    }
  };

</script>

<style lang="scss">

</style>
