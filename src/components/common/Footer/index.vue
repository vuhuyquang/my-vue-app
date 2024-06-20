<template>
  <div class="flex flex-col gap-[80px] bg-black mt-[5rem] h-screen text-white pt-[8rem] px-[100px] px-custom font-custom">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div class="flex flex-col gap-5">
        <h2>GIỚI THIỆU</h2>
        <p class="text-gray-300">Là lập trình viên website app, blogger và là Founder của Quag.</p>
      </div>
      <div class="flex flex-col gap-5">
        <h2>THÔNG TIN</h2>
        <ul class="text-gray-300 space-y-4">
          <li>Chính sách</li>
          <li>Điều khoản</li>
        </ul>
      </div>
      <div class="flex flex-col gap-5">
        <h2>ĐƯỜNG DẪN</h2>
        <ul class="text-gray-300 space-y-4">
          <li>
            <NuxtLink to="/">Trang chủ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/bai-viet">Bài viết</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lien-he">Liên hệ</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-5">
        <h2>BẠN CÓ CÂU HỎI?</h2>
        <ul class="text-gray-300 space-y-4">
          <li>Thanh Xuân, Hà Nội</li>
          <li>+84 34 439 6798</li>
          <li>quangvh.technical@gmail.com</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center text-gray-400">Copyright © 2023 All rights reserved | Made by Quang Vu Huy</div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped src="./styles.scss"></style>