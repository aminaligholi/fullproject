<template>
    <div class="row">
     <div v-for="video in videos" :key="video.id">
      <div class="card" style="width: 16rem; max-height:500px ;">
        <img class="card-img-top" :src=video.url alt="Card image cap">
        <div class="card-body">
        <nuxt-link :to="`/video/${video.id}`" >
          <h5 class="card-title">{{video.id}}</h5>
          <p class="card-text">{{video.title}}</p>
        </nuxt-link>
        <nuxt-link :to="`/video/cat/${video.albumId}`" >
          <p><span class="badge badge-secondary">{{video.albumId}}</span></p>
          </nuxt-link>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: "list user name "
    },
    async asyncData({
      $axios
    }) {
      const data = await $axios.get()
      const videos = data.data
      return {
        videos
      }
    },
  }
</script>

<style>

</style>