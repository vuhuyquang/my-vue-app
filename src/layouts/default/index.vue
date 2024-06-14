<template>
  <a-layout class="h-[100vh] overflow-hidden">
    <Header />
    <a-layout>
      <a-layout-content class="p-8">
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Header from '@/components/common/Header/index.vue';
</script>
