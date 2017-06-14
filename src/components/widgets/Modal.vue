<template>
  <div class="modal animated" :class="{'fadeIn':visible, 'show':visible}" v-show="visible">
    <div class="m-wrapper">
      <!-- <span class="fa-stack fa-lg btn-close" @click="hide">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-times fa-stack-1x fa-inverse"></i>
      </span> -->

      <slot>
        <div class="m-content"></div>

        <div class="m-footer"></div>
      </slot>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
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


<style>

</style>
