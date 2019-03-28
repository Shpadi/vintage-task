<template>
  <GmapMap
    :center="{lat:10, lng:10}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GmapMarker
      key="index"
      :position="{
      lat: 48.174270,
      lng: 16.329620,
    }"
      :clickable="true"
      :draggable="true"
    />
  </GmapMap>
</template>

<script>
  export default {
    name: 'Location'
  }
</script>

<style scoped>

</style>
