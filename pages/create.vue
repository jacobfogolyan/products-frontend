<template>
    <default class="create">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    this is the create page
                    <CreateForm />
                </div>
            </div>
        </div>
    </default>
</template>

<script>
import Default from '../layouts/Default.vue'
import CreateForm from '../components/form/CreateForm.vue'

export default {
    name: 'Create',
    components: {
        Default,
        CreateForm
    }
  
};
</script>

<style lang="scss">
.create {

}
</style>