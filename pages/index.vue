<template>
    <default>
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
    </default>
</template>

<script>
import 'flexboxgrid2'
import ProductCard from '../components/ProductCard.vue'
import Default from '../layouts/Default.vue'

export default {
    name: "Home",
    components: {
        ProductCard,
        Default
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

