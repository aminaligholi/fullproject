<template>
  <div class="row justify-content-around mt-4" dir="rtl">
    <div class=" col-12 col-md-7 ">
      <img src="https://via.placeholder.com/600/3a0b95" class="w-100" />
    </div>
    <div class=" col-12 col-md-5 pt-4">
      <h1>{{video.title}}</h1>
      <p>{{video.body}}</p>
      <div>
        <nuxt-link :to="`/video/cat/${video.userId}`">
          <span class="badge badge-secondary">{{video.userId}}</span>
        </nuxt-link>
      </div>
    <div>
      <nuxt-link :to="`/video/${video.id}/edit`">
        <span class="badge badge-secondary">Edit this file</span>
      </nuxt-link>
    </div>
    </div>
  </div>


  <!-- <div>
     <nuxt-link :to="`/video/${video.id}/edit`">
     <button class="btn btn-outline-info">Edit</button>
     </nuxt-link>
  </div> -->
</template>

<script>
  export default {
    props: ['video']
  }
</script>

<style>

</style>