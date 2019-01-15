<template>
    <nav>
        <ul>
            <li
                v-for="navItem in navItems"
                :key="navItem.name"
            >
                <router-link :to="navItem.link">{{ navItem.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "Nav",
    computed: mapState({
      navItems: state => state.nav.items,
    }),
  }
</script>

<style scoped>

</style>
