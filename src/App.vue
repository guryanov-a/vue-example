<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    // default vendor set up
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/mixins';
    @import '~bootstrap/scss/variables';

    // custom set up
    @import './styles/variables';

    // vendors
    @import '~normalize.css';
    @import '~bootstrap/scss/bootstrap-grid';

    #app {
        padding: ($grid-gutter-width / 2) 0;
    }

    img {
        max-width: 100%;
    }
</style>
