<template>
  <router-link class="blog-tag" :to="tag.path">
    {{ tag.name }} ({{ tag.pages.length }})
  </router-link>
</template>

<script>
export default {
  props: ['tag'],
  mounted() {
    let tags = document.querySelectorAll('.blog-tag')
    console.log(tags)
    for (let i = 0; i < tags.length; i++) {
      tags[i].style.setProperty(
        '--height',
        Math.ceil(Math.random() * 30) + 50 + 'px'
      )
    }
  },
}
</script>

<style lang="stylus">
.blog-tag {
  --height: 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--height);
  word-break: break-word;
  font-size: 17px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 3px;
  font-weight: 300;
  text-align: center;
  box-sizing: border-box;
  transition: background-color 0.3s;
  color: $codeBgColor;
  border: 1px solid $darkBorderColor;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: $accentColor !important;
    border: 1px solid $accentColor;
    box-shadow: 0 0 5px $accentColor;
  }
}

@media screen and (max-width: 768px) {
  .blog-tag {
    font-size: 14px;
    padding: 3px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
