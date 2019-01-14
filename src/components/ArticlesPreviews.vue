<template>
    <section>
        <ArticlePreview
            v-for="article in articles"
            :img="article.img"
            :title="article.title"
            :description="article.description"
        />
    </section>
</template>

<script>
  import { mapState } from 'vuex'

  import ArticlePreview from './ArticlePreview';

  export default {
    name: "ArticlesPreviews",
    components: { ArticlePreview },
    computed: mapState({
      articles: state => state.articles.items,
    }),
    created() {
      this.$store.dispatch('articles/getServerArticles');
    },
  }
</script>

<style scoped>

</style>
