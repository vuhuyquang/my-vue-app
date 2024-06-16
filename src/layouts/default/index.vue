<template>
  <a-layout class="h-[100vh] overflow-hidden">
    <Header />
    <a-layout>
      <a-layout-content class="p-8">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Header from '@/components/common/Header/index.vue';
</script>
