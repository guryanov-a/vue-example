<template>
    <header class="header">
        <Nav />
    </header>
</template>

<script>
  import Nav from './Nav.vue';

  export default {
    name: "Header",
    components: { Nav },
  }
</script>

<style lang="scss" scoped>
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/mixins';
    @import '~bootstrap/scss/variables';

    .header {
        padding: 10px;
        border: 2px solid black;
        margin-bottom: $grid-gutter-width;
    }
</style>
