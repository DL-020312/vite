<template>B2B出库单

{{store.state.count}}
<el-button @click="click">点击</el-button>
</template>
<script setup>
import { useStore } from 'vuex';
import { ref} from 'vue';
const store = useStore()
function click(){
    store.dispatch("GetInfo")
    console.log(store);
}
  </script>