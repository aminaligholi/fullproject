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
    async asyncData({
      $axios , params
    }) {
      const data = await $axios.get(`?userId=${params.cat}`)
      const videos = data.data
      return {
        videos
      }
    },
}
</script>

<style>

</style>