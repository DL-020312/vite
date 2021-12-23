<template>
  <el-container class="container">
    <el-aside width="200px">
      <el-menu
        default-active="/home"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @select="handleOpen"
        @close="handleClose"
      >
      <div v-for="i in routes" :key="i.path">
          <el-sub-menu index="1"  title="滴哟" v-if="i.children && i.children.length > 0">
          <template #title >
            <el-icon><arrow-left-bold /></el-icon>
            <span>{{i.name}}</span>
          </template>
          <el-menu-item :index="item.path" v-for="item in i.children"  :key="item.path">{{item.name}}</el-menu-item>
        </el-sub-menu>
        <el-menu-item :index="i.path" v-else>
          <el-icon><icon-menu /></el-icon>
          <template #title>{{i.name}}</template>
        </el-menu-item>
      </div>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import router from "../router/index";
let routes = router.options.routes.filter(i=>i.name !== "login")
const handleOpen = (e)=>{
  console.log(e);
  router.push(e)
}
</script>



<style>
.containe {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  height: 100vh;
  color: var(--el-text-color-primary);
  background-color: #ccc;
}
.el-main {
  background: #f5f5f5;
}
</style>
