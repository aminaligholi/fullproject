<template>
  <div class="iran">
    <div id="navbar">
      <nuxt-link to="/">home</nuxt-link> 
      <nuxt-link to="/video">video</nuxt-link> 
    
    </div>
    <div class=" container">
      <Nuxt />
    </div>
    
  </div>
</template>

<style scoped>
#navbar{
  background-color: darkslategray;
  width: 90%;
  height: 50px;
  margin: 0 auto;
}
#navbar a{
  color: azure;
  text-decoration: none;
  margin: 10px 5px
}

</style>
