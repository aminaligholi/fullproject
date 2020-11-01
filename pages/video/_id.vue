<template>
  <nuxt-child :video=video />
</template>
<script>
export default {
  head(){
return{
  title:'',
  titleTemplate:`%s ${this.video.title}`
}
  },
   async asyncData({$axios,params})        
   {
     const data =await $axios.get(`${params.id}`)
     const video = data.data
       return{
           video
       }
     
      },
// data() {
//         return {
//             videos:[
//                 {id:1 , name : 'goodday' , rank: 5.5},
//                 {id:2 , name : 'badboys' , rank: 7},
//                 {id:3 , name : 'thebech' , rank: 5.5},
//                 {id:4 , name : 'metry6.5' , rank: 8.5},
//             ]
//         }
//     },
    // computed:{
    //   video(){
    //    return this.videos.find(v=> v.id == this.$route.params.id);
       
    //   }
    // }
    }
</script>

<style>

</style>