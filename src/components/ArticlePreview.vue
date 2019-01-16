<template>
    <article class="article-preview">
        <img class="article-preview__img" :src="img" />
        <div class="article-preview__text">
            <h2 class="article-preview__title">
                <router-link class="article-preview__link" :to="'/articles/' + id">{{ title }}</router-link>
            </h2>
            <div class="article-preview__description">{{ description }}</div>
        </div>
    </article>
</template>

<script>
  export default {
    name: "ArticlePreview",
    props: [
      'id',
      'img',
      'title',
      'description',
    ],
  }
</script>

<style lang="scss" scoped>
    .article-preview {
        position: relative;
        border: 2px solid black;
        height: 400px;
        overflow: hidden;

        &__img {
            position: absolute;
            z-index: -1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            min-width: 100%;
            min-height: 100%;
            max-width: none;
            object-fit: cover;
        }
        &__text {
            padding: 20px;
            background: rgba(255, 255, 255, 0.5);
        }
        &__link {
            color: inherit;
            text-decoration: none;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
