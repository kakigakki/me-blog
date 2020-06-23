<template>
  <router-link class="blog-tag" :to="tag.path">
    {{ tag.name }} ({{ tag.pages.length }})
  </router-link>
</template>

<script>
export default {
  props: ['tag'],
}
</script>

<style lang="stylus">
.blog-tag
  display inline-flex
  align-items center
  height 30px
  word-break break-word
  font-size 15px
  margin-right 10px
  margin-bottom 10px
  padding 0 10px
  border-radius 5px
  font-weight 300
  text-align center
  box-sizing border-box
  transition background-color 0.3s
  color  $codeBgColor
  border 1px solid $darkBorderColor
  text-decoration none
  transition all 0.5s

  &:hover
    color  $accentColor !important
    border 1px solid  $accentColor
    box-shadow 0 0 5px  $accentColor

@media screen and (max-width: 768px)
  .blog-tag
    font-size 14px
    padding 3px 10px
    margin-right 10px
    margin-bottom 10px
</style>
