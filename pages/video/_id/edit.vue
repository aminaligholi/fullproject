<template>
  <div>
      page edit for {{video.title}}  by id : {{video.id}} userId {{video.userId}}
      <nuxt-link :to="`/video/${video.id}`">
     <button class="btn btn-outline-info">go to back page </button>
     </nuxt-link>
 
  </div>
</template>

<script>
export default {
props:['video'],
  head(){
return{
  title:`_Edit`
}
}}
</script>

<style>

</style>