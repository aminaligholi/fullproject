import Vue from 'vue'

Vue.directive('focus', {
  inserted: (el) => {
    setInterval(()=>{
    const bb=['red','black','green']
    const bg =bb[Math.floor(Math.random()*bb.length)]
    el.style.backgroundColor=bg;
  },1000)}
})