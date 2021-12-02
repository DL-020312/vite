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
import { onMounted } from "vue"
let obj = [
  { name: "123", age: 88, id: 1, pid: 0 },
  { name: "123", age: 88, id: 2, pid: 1 },
  { name: "90", age: 88, id: 3, pid: 1 },
  { name: "90", age: 88, id: 4, pid: 3 },
];

onMounted(() => {
  const xml = new XMLHttpRequest()
  xml.open('get','https://mock.mengxuegu.com/mock/6191c4a0f126df7bfd5b76e7/example/query')
  xml.send()
  xml.onreadystatechange = ()=>{
    console.log("这里",JSON.parse(xml.responseText));
  }
})
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