<template>
  <a-layout class="h-[100vh]">
    <Header />
    <a-layout-content class="container mx-auto w-screen max-w-full pt-[76px]">
      <router-view></router-view>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>
<script lang="ts" setup>
import Header from '@/components/common/Header/index.vue';
import Footer from '@/components/common/Footer/index.vue';
</script>
