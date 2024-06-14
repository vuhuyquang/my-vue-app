<template>
  <a-layout class="h-[100vh] overflow-hidden">
    <a-layout-header>
      <header class="fixed top-0 right-0 left-0 z-1030 drop-shadow-xl bg-white text-[14px] text-[black]">
        <nav class="px-5 h-[76px] flex justify-between items-center cursor-pointer">
          <div class="grid grid-flow-col auto-cols-max gap-2 flex items-center">
            <img class="border-solid border-2 border-[#e84118] p-[1px] rounded-full h-[44px] w-[44px]" height="44"
              width="44" src="https://cache.giaohangtietkiem.vn/d/a0181819bd2da9ba11508583a25f3db5.png?width=44"
              alt="avatar" />
            <div class="flex flex-cols-2 gap-0">
              <span class="font-bold">Quang Vu Huy</span>
              <span class="font-bold">Quang Vu Huy</span>
            </div>
          </div>
        </nav>
      </header>
    </a-layout-header>
    <a-layout>
      <a-layout>
        <a-layout-content class="p-8">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const selectedKeys1 = ref<string[]>(['2']);
</script>
<style scoped>
.site-layout-background {
  background: #fff;
}
</style>