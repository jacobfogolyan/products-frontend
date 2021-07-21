
export const state = () => ({
    currentProducts: [],
    hasProducts: false
})

export const mutations = {
    addSingleProduct (state, product) {
        state.currentProducts.push(product)
    },
    updateAllProducts (state, products) {
        products.forEach((product) => {
            state.currentProducts.push(product)
        })
    },
    clearAllProducts (state) {
        state.currentProducts.length = 0
    },
    deleteProduct (state, id) {
        state.currentProducts.find(product => product._id === id)
    },
    hasProductsTrue (state) {
        state.hasProducts = true
    },
    hasProductsFalse (state) {
        state.hasProducts = false
    }
}
export const actions = {
    async addProduct ({ commit }, product) {
        try {
            const response = await this.$axios.$post('/api/v1/products', product)
            commit('addSingleProduct', response)
        } catch (error) {
            // TODO gracefully handle error
            // eslint-disable-next-line no-console 
            console.log(error)
        }
    },
    async getProducts ({ commit }) {
        try {
            const response = await this.$axios.$get('/api/v1/products')
            commit('clearAllProducts')
            commit('updateAllProducts', response)
            commit('hasProductsTrue')
        } catch (error) {
            // TODO gracefully handle error
            // eslint-disable-next-line no-console 
            console.log(error)
            commit('hasProductsFalse')
        }
    },
    async deleteProduct({ commit, dispatch }, id) {
        try {
            const response = await this.$axios.$delete('/api/v1/product/' + id)
            if (response) {
                commit('deleteProduct', id)
                dispatch('getProducts')
            }
        } catch (error) {
            // TODO gracefully handle error
            // eslint-disable-next-line no-console 
            console.log(error)
        }
    },
    async updateProduct({ commit, dispatch }, update) {
        try {
            const response = await this.$axios.$patch('/api/v1/product', update)
            if (response) {
                dispatch('getProducts')
                this.$router.push('/')
            }
        } catch (error) {
            // TODO gracefully handle error
            // eslint-disable-next-line no-console 
            console.log(error)
        }
    }
}