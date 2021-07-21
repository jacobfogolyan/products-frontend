<template>
    <div v-if="getProductStore.length" class="container">
        <div class="row">
            <ProductCard
                v-for="(product, index) in getProductStore"
                :key="index"
                :product="product"
                class="col-xs-4"
            />
        </div>
    </div>
</template>

<script>
import 'flexboxgrid2'
import ProductCard from '../components/ProductCard.vue'

export default {
    name: "Home",
    components: {
        ProductCard
    },
    computed: {
        getProductStore () {
            return this.$store.state.product.currentProducts
        }
    },
    mounted () {
        this.initialLoad()
    },
    methods: {
        async initialLoad () {
            await this.$store.dispatch('product/getProducts')
        }
    }
}
</script>

