<template>
  <form class="create-form" @submit.prevent="submitForm">
      <div class="row">
          <!-- TODO make component -->
          <div class="col-xs-12 col-sm-6">
            <label for="name">Name: </label>
            <input v-model="form.name" required name="name" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <label for="size">Size: </label>
            <input v-model="form.size" required type="number" name="size" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <label for="color">color</label>
            <input v-model="form.color" name="color" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <label for="material">material</label>
            <input v-model="form.material" required name="material" />
          </div>
          <div class="col-xs-12">
            <button type="submit">Submit</button>
          </div>
      </div>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    form: {
      name: '',
      size: '',
      color: '',
      material: ''
    }
  }),
  mounted () {
    if (this.product) {
      const { name, size, color, material } = this.product
      this.form.name = name
      this.form.size = size
      this.form.color = color
      this.form.material = material
    }
  },
  methods: {
    submitForm () {
        if (!this.product) {
          // normal form submission
          this.addProduct()
        } else {
          this.editProduct()
        }
    },
    addProduct () {
      this.$store.dispatch('product/addProduct', this.form)
    },
    editProduct () {
      this.$store.dispatch('product/updateProduct', { id: this.product._id, update: this.form })
    }
  }
};
</script>