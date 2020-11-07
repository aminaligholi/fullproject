<template>
  <div class="row">
     <card v-for="video in videos" :key="video.id"
     :video="video">
     </card>
  </div>
</template>

<script>
import card from '@/components/card'
import {mapState} from 'vuex'
export default {
  async fetch({
      store , params
    }) {
      await store.dispatch('allvideos', {paylo:`?userId=${params.cat}`} )
    },
    computed:{
      ...mapState(['videos'])
    }
}
</script>

<style>

</style>