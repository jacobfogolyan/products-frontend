<template>
  <div class="product-card">
    <div class="content">
        <p>Name: {{ product.name }}</p>
        <p>Size: {{ product.size }}</p>
        <p>Color: {{ product.color }}</p>
        <p>Material: {{ product.material }}</p>
        <p>ID: {{ product._id }}</p>
        <button @click="editProduct">Edit</button>
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
      }
  }
};
</script>

<style lang="scss">
.product-card {
    margin-top: 2rem;
    position: relative;
    display: block;
    .content {
        border-radius: 10px;
        border: 5px solid #333;
        background-color: #999;
        padding: 1em;
    }
}
</style>