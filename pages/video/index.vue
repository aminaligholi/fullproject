<template>
<div class="row">
    <card v-for="video in videos" :key="video.id" :video="video">
        <client-only>
            <itemLoading></itemLoading>
        </client-only>
    </card>
</div>
</template>

<script>
import itemLoading from '@/components/itemLoading'
import card from '@/components/card'
import { mapState } from 'vuex'
export default {
    components: {
        card,
        itemLoading
    },

    head: {
        title: "list user name "
    },
    async fetch({ store, from }) {
            await store.dispatch('allvideos', { paylo: '' })
        
    },
    computed: {
        ...mapState(['videos'])
    }
    // async asyncData({
    //   $axios
    // }) {
    //   const data = await $axios.get()
    //   const videos = data.data
    //   console.log(data)
    //   return {
    //     videos
    //   }
    // },
}
</script>

<style>

</style>
