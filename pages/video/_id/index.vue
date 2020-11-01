<template>
  <div>
     way dont show this page <span style="color:red">{{video.title}}</span>
     <nuxt-link :to="`/video/${video.id}/edit`">
     <button class="btn btn-outline-info">Edit</button>
     </nuxt-link>
  </div>
</template>

<script>
export default {
props:['video']
}
</script>

<style>

</style>