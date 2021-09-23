<template>
  <div class="home-container">
    <div class="box-juce"></div>
    <div class="box-aimi"></div>
    <div class="box-kaiqi"></div>
    <div class="box-bruce"></div>
    <div class="box-aimili"></div>
  </div>
</template>

<script setup>
</script>

<style scoped >
.home-container {
  top: 50%;
  display: grid;
  height: 400px;
  width: 100vw;
  background: #ddd;
  place-self: center;
  position: absolute;
  transform: translateY(-50%);
  grid-template-columns: repeat(5, 1fr);
}

.box-juce {
  background: #ccc;
}

.box-aimi {
  background: #eee;
}

.box-kaiqi {
  background: #c2c2c2;
}

.box-bruce {
  background-color: #d3c3c3;
}

.box-aimili {
  background-color: #4a4a4a;
}
</style>