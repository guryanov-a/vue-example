<template>
    <DefaultLayout>
        <h1>{{ article.title }}</h1>
        <div>{{ article.text }}</div>
    </DefaultLayout>
</template>

<script>
  import { mapState } from 'vuex';

  import DefaultLayout from '../layouts/DefaultLayout.vue';

  export default {
    name: "Article",
    components: { DefaultLayout },
    computed: mapState({
      article: state => state.articles.loadedArticle,
    }),
    created() {
      const id = parseInt(this.$route.params.id);
      this.$store.dispatch('articles/loadArticle', { id });
    },
    beforeDestroy() {
      this.$store.commit('articles/setArticle', { article: {} });
    },
  }
</script>

<style scoped>

</style>
