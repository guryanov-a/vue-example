<template>
    <section>
        <div class="row">
            <div
                v-for="article in articles"
                :class="article.type === 'normal' ? 'col col-12 col-sm-6 col-md-4' : 'col col-12 col-md-8'"
            >
                <ArticlePreview
                    class="article-preview"
                    :class="article.type !== 'normal' && 'article-preview_width_double'"
                    :key="article.id"
                    :img="article.img"
                    :title="article.title"
                    :description="article.description"
                />
            </div>
        </div>
    </section>
</template>

<script>
  import { mapState } from 'vuex';

  import ArticlePreview from './ArticlePreview.vue';

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
