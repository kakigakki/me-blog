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
      localStorage.setItem('accentColor', themeColor.accent);
      localStorage.setItem('textColor', themeColor.text);
      document.body.style.setProperty('--accentColor',themeColor.accent );
      document.body.style.setProperty('--textColor',themeColor.text );
    },
    toggleColor(themeColor){
      if (localStorage.getItem('accentColor') !== themeColor.accent){
        this.setTheme(themeColor);
      }
    }
  },
    data(){
    return {
      defaultTheme:{
        accent:"#9d6381",
        text:"#000"
      },
      secondTheme:{
        accent:"#7A663E",
        text:"#132a13"
      },
      thirdTheme:
      {
        accent:"#5c80bc",
        text:"#250902"
      },
      forthTheme:
      {
        accent:"#4C5F07",
        text:"#353535"
      },
      fifthTheme:{
        accent:"#A41613",
        text:"#1c2541"
      }
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
    let accentColor = localStorage.getItem('accentColor')
    switch (accentColor) {
      case this.defaultTheme.accent:
        this.setTheme(this.defaultTheme)
        break;
      case this.secondTheme.accent:
        this.setTheme(this.secondTheme)
        break;
      case this.thirdTheme.accent:
        this.setTheme(this.thirdTheme)
        break;
      case this.forthTheme.accent:
        this.setTheme(this.forthTheme)
        break;
      case this.fifthTheme.accent:
        this.setTheme(this.fifthTheme)
        break;
      default:
        break;
    }
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
    border-bottom 2px solid #540d6e
    &:hover
      background-color #540d6e

  button:nth-child(2)
    border-bottom 2px solid  #7A663E
    &:hover
      background-color #7A663E
  
  button:nth-child(3)
    border-bottom 2px solid  #5c80bc
    &:hover
      background-color  #5c80bc

  button:nth-child(4)
    border-bottom 2px solid  #4C5F07
    &:hover
      background-color  #4C5F07

  button:nth-child(5)
    border-bottom 2px solid #A41613
    &:hover
      background-color  #A41613

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
