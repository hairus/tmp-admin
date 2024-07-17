<template>
  <div class="flex">
    <sidebar-page />
    <div class="container">
     <head-page />
      <div class="flex h-screen w-full bg-base-200">
        <router-view class="mt-10" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SidebarPage from './components/SidebarPage.vue';
import HeadPage from './components/HeadPage.vue';
const open = ref(false);
</script>