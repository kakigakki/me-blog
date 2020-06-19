<template>
    <div class="colorPicker">
      <button @click="toggleColor(defaultTheme)" ref="button1"></button>
      <button @click="toggleColor(secondTheme)" ></button>
      <button @click="toggleColor(thirdTheme)"></button>
      <button @click="toggleColor(forthTheme)"></button>
      <button @click="toggleColor(fifthTheme)"></button>
    </div>
</template>

<script>
export default {
  name:"themeColor",
  methods:{
    // Set a given theme/color-scheme
    setTheme(themeColor) {
      localStorage.setItem('themeColor', themeColor);
      document.body.style.setProperty('--accentColor',themeColor );
    },
    toggleColor(themeColor){
      if (localStorage.getItem('theme') !== themeColor){
        this.setTheme(themeColor);
      }
    }
  },
    data(){
    return {
      defaultTheme:"#f45b69",
      secondTheme:"#87d6b2",
      thirdTheme:"#ffbf01",
      forthTheme:"#b49c73",
      fifthTheme:"#808080",
    }
  },
  mounted(){
    let buttons = document.querySelectorAll(".colorPicker button")
    buttons.forEach(item=>{
      item.addEventListener("click",function(){
        this.classList.add("activeAnima")
      })
      item.addEventListener("animationend",function(){
        this.classList.remove("activeAnima")
      })
    })
  }
}
</script>

<style scoped lang="stylus">

.colorPicker
  position fixed
  display flex
  justify-content space-around
  align-items stretch
  z-index 13
  top $headerHeight
  transform translate(0,-100%)
  width 100%
  height 10px

  button
    outline:none;
    background-color $headerBgColor
    width 100%
    border 0

    &:hover
      transition background-color .5s 
      height 13px

  button:nth-child(1)
    border-bottom 2px solid #f45b69
    &:hover
      background-color #f45b69

  button:nth-child(2)
    border-bottom 2px solid  #87d6b2
    &:hover
      background-color #87d6b2
  
  button:nth-child(3)
    border-bottom 2px solid  #ffbf01
    &:hover
      background-color  #ffbf01

  button:nth-child(4)
    border-bottom 2px solid  #b49c73
    &:hover
      background-color  #b49c73

  button:nth-child(5)
    border-bottom 2px solid #808080
    &:hover
      background-color  #808080

.activeAnima
  animation buttonClick 0.3s ease  1 forwards

@keyframes buttonClick
  50%
    transform scale(1.2) 
  100%
    transform ""

@media (max-width: $MQMobile)
  .colorPicker
    display none

</style>
