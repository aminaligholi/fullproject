<template>
  <div>
    <div v-show="video">
      <div class="card" style="width: 16rem; max-height:500px ;" >
        <img class="card-img-top" src="https://via.placeholder.com/600/3a0b95" alt="Card image cap">
        <div class="card-body">
          <nuxt-link :to="`/video/${video.id}`">
            <h5 class="card-title">{{video.id}}</h5>
            <p class="card-text">{{video.title}}</p>
          </nuxt-link>
          <div>
            <nuxt-link :to="`/video/cat/${video.userId}`">
              <span class="badge badge-secondary">{{video.userId}}</span>
            </nuxt-link>
          </div>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div  v-show="!video">
      <client-only>
        <itemLoading></itemLoading>
      </client-only>
    </div>
  </div>

</template>

<script>
  import itemLoading from '@/components/itemLoading'
  export default {
    components: {
      itemLoading
    },
    props: ["video"]
  }

</script>

<style>

</style>
