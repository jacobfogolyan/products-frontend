export const state = () => ({
    currentProducts: []
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
    }
}

// {
//     "name": "shirt",
//     "size": 10,
//     "color": "black",
//     "material": "cotton"
// }
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
        } catch (error) {
            // TODO gracefully handle error
            // eslint-disable-next-line no-console 
            console.log(error)
        }
    },
    async deleteProduct({ commit, dispatch }, id) {
        // eslint-disable-next-line no-console 
        console.log(id)
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
    }
}