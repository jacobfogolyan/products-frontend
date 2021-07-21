<template>
    <div v-if="getProductStore.length" class="container">
        <div class="row">
            <router-link
                v-for="({ text, route }, index) in buttons"
                :key="index"
                :to="route"
                class="col-xs-4"
            >
                {{ text }}
            </router-link>
        </div>
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
    data: () => ({
        buttons: [
            {
                text: "Create",
                route: '/create'
            }
        ]
    }),
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

