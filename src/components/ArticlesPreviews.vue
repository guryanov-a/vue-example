<template>
    <section class="articles-previews">
        <div class="row">
            <div
                v-for="article in articles"
                :class="article.type === 'normal' ? 'col col-12 col-sm-6 col-md-4' : 'col col-12 col-md-8'"
            >
                <ArticlePreview
                    class="articles-previews__item"
                    :class="article.type === 'double' && 'article-preview_width_double'"
                    :key="article.id"
                    :id="article.id"
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
      this.$store.dispatch('articles/loadArticles');
    },
  }
</script>

<style lang="scss" scoped>
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/mixins';
    @import '~bootstrap/scss/variables';

    .article-preview {
        margin-bottom: $grid-gutter-width;
    }
</style>
