<template>
<div class="iran">
    <div id="navbar">
        <div class="row">
            <div class="col-2  text-center px-0 align-self-center ">
                <nuxt-link to="/">home</nuxt-link>
                <nuxt-link to="/video">video</nuxt-link>
            </div>
            <div class="col-3 bg-warning align-self-center offset-7 text-center" v-if="$auth.loggedIn">
                {{$auth.user.email}}
                <a class="btn"> Logout</a>
            </div>
            <div class="col-3  px-0 align-self-center offset-7 text-center"  v-else>
              <button @click="aaaa()">d</button>
                <nuxt-link class="btn " to="/singup">sing up </nuxt-link>
                <button type=" button" class="btn text-white" data-toggle="modal" data-target="#exampleModalCenter">login</button>
                <modalLogin></modalLogin>
            </div>
        </div>

    </div>
    <div class=" container">
        <Nuxt />
    </div>

</div>
</template>

<script>
import modalLogin from '@/components/modalLogin'
export default {
    components: {
        modalLogin
    },
    methods:{
      aaaa(){
        console.log(this.$auth)
      }
    }
}
</script>

<style scoped>
#navbar {
    background-color: darkslategray;
    width: 90%;
    height: 50px;
    margin: 0 auto;
}

#navbar a {
    color: azure;
    text-decoration: none;
    margin: 10px 5px
}
</style>
