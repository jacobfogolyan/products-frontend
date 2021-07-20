<template>
    <div v-if="getProductStore.length">
        <div v-for="(product, index) in getProductStore" :key="index">
            <div>{{ product.color }}</div>
            <div>{{ product.name }}</div>
            <div>{{ product.size }}</div>
            <div>{{ product.material }}</div>
            <div>{{ product._id }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
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
