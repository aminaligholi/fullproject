<template>
  <vue-content-loading :width="250" :height="295">
    <path stroke="#000" id="svg_5" d="m173.51461,106.77835l-95.75925,0l0,-65.29668l95.75925,0l0,65.29668zm-72.46646,-39.70744c7.38123,0 13.37006,-4.0837 13.37006,-9.11683c0,-5.03667 -5.98883,-9.11684 -13.37006,-9.11684c-7.3864,0 -13.37006,4.0837 -13.37006,9.11684c0,5.03313 5.98366,9.11683 13.37006,9.11683zm67.29546,7.94148l-25.45125,-17.35479l-35.80361,24.4139l-9.92273,-6.76615l-14.24483,9.71332l0,18.23012l85.42242,0l0,-28.2364z" fill-opacity="null" stroke-opacity="null" stroke-width="3.5" fill="#fff"/>
    <rect id="svg_9" height="145" width="251" y="0" x="0" fill-opacity="null" stroke-opacity="null" stroke-width="3.5" stroke="#000" fill="none"/>
    <rect id="svg_10" height="22" width="142" y="164.45313" x="97.5" fill-opacity="null" stroke-opacity="null" stroke-width="3.5" stroke="#000" fill="none"/>
    <rect id="svg_11" height="15" width="230" y="200.45313" x="10.5" fill-opacity="null" stroke-opacity="null" stroke-width="3.5" stroke="#000" fill="none"/>
    <rect stroke="#000" id="svg_12" height="15" width="197" y="231.45313" x="43.5" fill-opacity="null" stroke-opacity="null" stroke-width="3.5" fill="none"/>
  </vue-content-loading>
</template>

<script>
  import VueContentLoading from 'vue-content-loading'
  
  export default {
		name: 'ItemLoading',
    components: {
      VueContentLoading,
    },
  }
</script>

<style scoped>
  
  svg {
    width: 250px;
    height: 295px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 0.25em 0.02em rgba(0, 0, 0, 0.3);
    margin: 0 10px 30px;
    
  }

</style>
