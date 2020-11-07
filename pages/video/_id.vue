<template>
<nuxt-child :video=videos />
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    head() {
        return {
            title: '',
            titleTemplate: `%s ${this.videos.title}`
        }
    },
    async fetch({store,params}) {
        await store.dispatch('allvideos', {
            paylo: params.id
        })
    },
    computed:{
      ...mapState(['videos']),

    }
    
}
</script>

<style>

</style>
