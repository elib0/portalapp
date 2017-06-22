<template>
  <div class="loader animated" v-show="visible">
    <div class="text-center">
      <i class="fa fa-refresh fa-spin fa-5x fa-fw"></i>
      <h4 class="main-title"><strong>{{ title }}</strong></h4>
    </div>
  </div>
</template>

<script>
  export default {
    data () {},
    props: {
      title: {
        type: String,
        default: 'Cargando...'
      },
      visible: false
    },
    methods: {
      show () {
        this.$emit('modal-shown')
        this.visible = true
      },
      hide () {
        this.$emit('modal-closed')
        this.visible = false
      }
    }
  }
</script>


<style scoped lang="scss">
  @import '../../styles/variables';
  .loader{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3100;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    // Tiempo de animación
    animation-duration: 0.5s;

    min-height: 100%;
    background: $color1;
    background: -moz-linear-gradient(top, $color1 0%, $color2 100%) no-repeat;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, $color1), color-stop(100%, $color2)) no-repeat;
    background: -webkit-linear-gradient(top, $color1 0%, $color2 100%) no-repeat;
    background: -o-linear-gradient(top, $color1 0%, $color2 100%) no-repeat;
    background: -ms-linear-gradient(top, $color1 0%, $color2 100%) no-repeat;
    background: linear-gradient(to bottom, $color1 0%, $color2 100%) no-repeat;

    > div {
      width: 100%;
      padding: 1.5em 0;

      h4{
        color: #FFF;
      }
    }
  }
</style>
