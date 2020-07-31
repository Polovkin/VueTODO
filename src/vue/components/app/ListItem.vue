<template lang="pug">
  .list__item
    h3 item

</template>

<script>
export default {
  name: "ListItem.vue",
  props: {
    complete: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="scss" scoped>
 .list {
   &__item {
     @extend %flex-row-between;
     align-items: center;
     width: 100%;
     padding: 20px;
     border:  {
       color: $color__primary;
       radius: 20px;
       width: 2px;
       style: solid;
     };
     margin-bottom: 1rem;
    }
 }
</style>
