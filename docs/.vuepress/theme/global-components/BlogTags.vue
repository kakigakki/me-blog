<template>
  <div class="blog-tags">
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
  </div>
</template>

<script>
export default {
  props: ['tags'],
}
</script>

<style lang="stylus">
.blog-tags {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 250px; // 修改整体标签页的高度,形成瀑布
}
</style>
