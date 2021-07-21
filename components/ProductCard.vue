<template>
  <div class="product-card">
    <div class="content">
        <div>{{ product.color }}</div>
        <div>{{ product.name }}</div>
        <div>{{ product.size }}</div>
        <div>{{ product.material }}</div>
        <div>{{ product._id }}</div>
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
      testmethod () {
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
    .content {
        border-radius: 10px;
        border: 5px solid #333;
        background-color: #999;
        padding: 1em;
    }
}
</style>