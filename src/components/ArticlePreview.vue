<template>
    <article>
        <img :src="img" />
        <h2>{{ title }}</h2>
        <div>{{ description }}</div>
    </article>
</template>

<script>
  export default {
    name: "ArticlePreview",
    props: [
      'img',
      'title',
      'description',
    ],
  }
</script>

<style scoped>

</style>
