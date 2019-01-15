<template>
    <DefaultLayout>
        <main>
            <ArticlesPreviews />
        </main>
    </DefaultLayout>
</template>

<script>
  import DefaultLayout from '../layouts/DefaultLayout.vue';
  import ArticlesPreviews from '../components/ArticlesPreviews.vue';

  export default {
    name: "home",
    components: {
      ArticlesPreviews,
      DefaultLayout
    },
  }
</script>

<style scoped>

</style>
