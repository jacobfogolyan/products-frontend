<template>
  <div class="main">
      <div class="container">
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
      </div>
      <slot />
  </div>
</template>

<script>

export default {
  name: 'Default',
    data: () => ({
        buttons: [
            {
                text: 'Home',
                route: '/'
            }
        ]
    }),
};
</script>
