<template>
    <span class="close-button" @click="removeProduct">x</span>
</template>

<script>
export default {
  name: 'CloseButton',
  props: {
      product: {
        type: Object,
        required: true,
      }
  },
  methods: {
      async removeProduct () {
          await this.$store.dispatch('product/deleteProduct', this.product._id)
      }
  }
};
</script>

<style lang="scss">
$button-width: 25px;
.close-button {
    cursor: pointer;
    width: $button-width;
    height: $button-width;
    position: absolute;
    top: -20%;
    right: 0;
    background-color: #f00;
    border-radius: $button-width / 2; // TODO deprecated use dart-sass
    text-align: center;
    color: white;
}
</style>