<template>
    <div class="row">
     <card v-for="video in videos" :key="video.id"
     :video="video"
     ></card>
  </div>
</template>

<script>
import card from '@/components/card'
  export default {
    head: {
      title: "list user name "
    },
    async asyncData({
      $axios
    }) {
      const data = await $axios.get()
      const videos = data.data
      console.log(data)
      return {
        videos
      }
    },
  }
</script>

<style>

</style>