<template>
    <default class="create">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1>Update Product Page</h1>
                </div>
                <div class="col-xs-12">
                    <ProductForm :product="$route.query" />
                </div>
            </div>
        </div>
    </default>
</template>

<script>
import Default from '../layouts/Default.vue'
import ProductForm from '../components/form/ProductForm.vue'

export default {
    name: 'Create',
    components: {
        Default,
        ProductForm
    }
};
</script>