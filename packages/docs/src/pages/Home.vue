<script setup lang="ts">
import Sidebar from '../components/SideBar.vue'
</script>
<template>
  <sidebar />
  <div class="page" v-scrollable>
    <router-view />
  </div>
</template>
