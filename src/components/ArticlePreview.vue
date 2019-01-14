<template>
    <article>
        <h2>Tile 1</h2>
        <div>Tile Description</div>
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
