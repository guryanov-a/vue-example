<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>


    export default {}
</script>

<style lang="scss">
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/mixins';
    @import '~bootstrap/scss/variables';

    $grid-breakpoints: (
        xs: 0,
        sm: 480px,
        md: 1024px
    );

    @import '~normalize.css';
    @import '~bootstrap/scss/bootstrap-grid';

    #app {
        padding: ($grid-gutter-width / 2) 0;
    }
</style>
