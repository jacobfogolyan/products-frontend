<template>
  <form class="create-form" @submit.prevent="addProduct">
      <div class="row">
          <!-- TODO make component -->
          <div class="col-xs-6">
            <label for="name">Name: </label>
            <input v-model="form.name" name="name" />
          </div>
          <div class="col-xs-6">
            <label for="size">Size: </label>
            <input v-model="form.size" name="size" />
          </div>
          <div class="col-xs-6">
            <label for="color">color</label>
            <input v-model="form.color" name="color" />
          </div>
          <div class="col-xs-6">
            <label for="material">material</label>
            <input v-model="form.material" name="material" />
          </div>
          <div class="col-xs-12">
            <button type="submit">Submit</button>
          </div>
      </div>
  </form>
</template>

<script>
export default {
  name: 'CreateForm',
  data: () => ({
    form: {
      name: '',
      size: '',
      color: '',
      material: ''
    }
  }),
  methods: {
      addProduct () {
        this.$store.dispatch('product/addProduct', this.form)
      }
  }
};
</script>