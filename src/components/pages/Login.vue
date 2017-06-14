<template>
  <div class="page page-login">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col">
          <div class="text-center">
            <h2 class="text-primary">Portal App</h2>
            <div class="form-group">
              <div class="input-group">
                <input class="form control" type="text" v-model="nickname" placeholder="¿Cual es tu nombre?">
                <span class="input-group-btn">
                    <router-link class="btn btn-primary" to="Home" v-show="nickname && nickname != ''">
                      <i class="fa fa-beer"></i>
                    </router-link>
                  </span>
              </div>
            </div>
            <!--<small>por que la cuenta siempre se olvida</small>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      nickname: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-login{
    background: url("../../assets/pilsen-bg.png") no-repeat top center;
    /*-webkit-background-size: 100%;*/
    background-size: 40%;
  }
</style>
