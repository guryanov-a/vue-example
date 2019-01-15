<template>
    <nav class="nav">
        <ul class="nav__menu">
            <li
                v-for="navItem in navItems"
                :key="navItem.name"
                class="nav__item"
            >
                <router-link
                    :to="navItem.link"
                    class="nav__link"
                >{{ navItem.title }}</router-link>
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

<style lang="scss" scoped>
    .nav {
        &__menu {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
        }
        &__item {
            margin-right: 15px;
        }
    }
</style>
