<template>
  <a-layout class="h-[100vh] overflow-hidden">
    <Header />
    <a-layout class="container mx-auto w-screen max-w-full">
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Header from '@/components/common/Header/index.vue';
</script>
