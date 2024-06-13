<template>
  <header class="fixed top-0 right-0 left-0 z-1030 drop-shadow-xl bg-white text-[14px] text-[black]">
    <nav class="px-5 h-[76px] flex justify-between items-center cursor-pointer">
      <div class="grid grid-flow-col auto-cols-max gap-2">
        <img class="border-solid border-2 border-[#e84118] p-[1px] rounded-full h-[44px] w-[44px]" height="44"
          width="44" src="https://cache.giaohangtietkiem.vn/d/a0181819bd2da9ba11508583a25f3db5.png?width=44"
          alt="avatar" />
        <div class="grid grid-rows-2 gap-1">
          <span class="font-bold">Quang Vu Huy</span>
          <div class="flex items-center gap-1">
            <a-popover class="flex" placement="bottomLeft" title="Thông tin cá nhân">
              <template #content class="flex gap-1">
                <div class="flex flex-col gap-3">
                  <div class="flex gap-1">
                    <ShoppingFilled class="mt-1" />
                    <p>Làm việc tại <span class="font-bold">Giaohangtietkiem.vn</span></p>
                  </div>
                  <div class="flex gap-1">
                    <HomeFilled class="mt-1" />
                    <p>Sống tại <span class="font-bold">Hà Nội</span></p>
                  </div>
                  <div class="flex gap-1">
                    <EnvironmentFilled class="mt-1" />
                    <p>Đến từ <span class="font-bold">Thái Bình</span></p>
                  </div>
                  <div class="flex gap-1">
                    <HeartFilled class="mt-1" />
                    <p>Độc thân</p>
                  </div>
                </div>
              </template>

              <span class="text-slate-700 font-normal">Lập trình viên</span>
              <span class="flex items-center ml-[3px]">
                <CaretDownOutlined :style="{ fontSize: '10px' }" />
              </span>
            </a-popover>
            <span class="ml-1 text-slate-500">Theo dõi</span>
          </div>
        </div>
      </div>
      <div class="font-semibold tracking-[2px]">
        <div class="hidden sm:hidden md:hidden lg:flex">
          <ul class="flex gap-[2rem]">
            <li class="hover:text-[#fdcb6e] transition delay-[45ms]">
              <NuxtLink to="/">TRANG CHỦ</NuxtLink>
            </li>
            <li class="hover:text-[#fdcb6e] transition delay-[45ms]">
              <NuxtLink to="/bai-viet">BÀI VIẾT</NuxtLink>
            </li>
            <li class="hover:text-[#fdcb6e] transition delay-[45ms]">
              <NuxtLink to="/lien-he">LIÊN HỆ</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:hidden flex items-center">
          <MenuOutlined @click="showDrawer" class="text-base" />
        </div>
      </div>
    </nav>
  </header>

  <a-drawer v-model:open="open" title="ĐƯỜNG DẪN" class="text-dark cursor-pointer">
    <ul class="flex flex-col mt-4 font-medium">
      <li @click="hideDrawer" class="py-2 px-4 hover:bg-gray-100 rounded">
        <NuxtLink to="/">TRANG CHỦ</NuxtLink>
      </li>
      <li @click="hideDrawer" class="py-2 px-4 hover:bg-gray-100 rounded">
        <NuxtLink to="/bai-viet">BÀI VIẾT</NuxtLink>
      </li>
      <li @click="hideDrawer" class="py-2 px-4 hover:bg-gray-100 rounded">
        <NuxtLink to="/lien-he">LIÊN HỆ</NuxtLink>
      </li>
    </ul>
  </a-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const open = ref<boolean>(false)

const showDrawer = () => {
  open.value = true
}

const hideDrawer = () => {
  open.value = false
}
</script>

<style scoped src="./styles.scss"></style>