export const state = () => ({
    currentProducts: []
})

export const mutations = {
    updateAllProducts (state, products) {
        products.forEach((product) => {
            state.currentProducts.push(product)
        })
    }
}
export const actions = {
    async nuxtServerInit ({ dispatch }) {
        await dispatch('getProducts')
    },
    async getProducts ({ commit }, ) {
        try {
            const response = await this.$axios.$get('/api/v1/products')
            commit('updateAllProducts', response)
        } catch (error) {
            // TODO gracefully handle error
            // eslint-disable-next-line no-console 
            console.log(error)
        }
    }
}