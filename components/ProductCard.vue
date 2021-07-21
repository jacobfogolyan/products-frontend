<template>
  <div class="product-card" @click="editProduct">
    <div class="content">
        <div>Name: {{ product.name }}</div>
        <div>Size: {{ product.size }}</div>
        <div>Color: {{ product.color }}</div>
        <div>Material: {{ product.material }}</div>
        <div>ID: {{ product._id }}</div>
    </div>
    <CloseButton :product="product" />
  </div>
</template>

<script>
import CloseButton from '../components/CloseButton'

export default {
  name: 'ProductCard',
  components: {
      CloseButton
  },
  props: {
      product: {
          type: Object,
          required: true,
          default: () => ({})
      }
  },
  methods: {
      editProduct () {
          const { name, size, color, material, _id } = this.product
          this.$router.push({ path: '/update', query: { name, size, color, material, _id } })
          // eslint-disable-next-line no-console
          console.log('asdfasdfas')
      }
  }
};
</script>

<style lang="scss">
.product-card {
    margin-top: 2rem;
    position: relative;
    display: block;
    cursor: pointer;
    .content {
        border-radius: 10px;
        border: 5px solid #333;
        background-color: #999;
        padding: 1em;
    }
}
</style>