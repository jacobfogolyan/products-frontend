<template>
    <default>
        <div v-if="getProductStore.length" class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1>Create New Product Here</h1>
                </div>
            </div>
            <ProductForm />
            <div class="row">
                <ProductCard
                    v-for="(product, index) in getProductStore"
                    :key="index"
                    :product="product"
                    class="col-xs-12 col-sm-4"
                />
            </div>
        </div>
    </default>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Default from '../layouts/Default.vue'
import ProductForm from '../components/form/ProductForm.vue'

export default {
    name: "Home",
    components: {
        ProductCard,
        Default,
        ProductForm
    },
    computed: {
        getProductStore () {
            return this.$store.state.product.currentProducts
        }
    },
    mounted () {
        this.loadProducts()
        // eslint-disable-next-line no-console
    },
    methods: {
        async loadProducts () {
            await this.$store.dispatch('product/getProducts')
        }
    }
}
</script>

