<template>
    <div class="row justify-content-around mt-4" dir="rtl">
      <div class=" col-12 col-md-7 ">
         <img src="https://via.placeholder.com/600/3a0b95" class="w-100" /> 
      </div>
      <div class=" col-12 col-md-5 pt-4">
        <h1>{{video.title}}</h1>
        <p>{{video.body}}</p>
          <nuxt-link :to="`/video/cat/${video.userId}`" >
          <p><span class="badge badge-secondary">{{video.userId}}</span></p>
          </nuxt-link>
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
props:['video']
}
</script>

<style>

</style>