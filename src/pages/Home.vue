<template>
    <DefaultLayout>
        <main>
            <ArticlesPreviews />
        </main>
    </DefaultLayout>
</template>

<script>
  import DefaultLayout from '../layouts/DefaultLayout';
  import ArticlesPreviews from '../components/ArticlesPreviews';

  export default {
    name: "Home",
    components: {ArticlesPreviews, DefaultLayout },
  }
</script>

<style scoped>

</style>
