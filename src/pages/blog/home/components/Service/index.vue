<template>
  <div class="h-screen flex items-center justify-center">
    <div class="h-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container-service text-[16px]">
      <div class="service-item px-5 py-20 bg-white text-dark flex flex-col gap-5">
        <div>
          <img height="80" width="80" src="@/assets/icons/svg/web-development.svg" />
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="heading mb-3 service-name">Phát triển Web</h3>
          <p>Xây dựng và phát triển các ứng dụng web.</p>
        </div>
      </div>
      <div class="service-item px-5 py-20 bg-[#1e1e1e] text-white flex flex-col gap-5">
        <div>
          <img height="80" width="80" src="@/assets/icons/svg/web-design.svg" />
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="heading mb-3 service-name">Viết Tool</h3>
          <p>Tạo ra các công cụ tự động, tối ưu hóa quy trình làm việc.</p>
        </div>
      </div>
      <div class="service-item px-5 py-20 bg-white flex flex-col gap-5">
        <div>
          <img height="80" width="80" src="@/assets/icons/svg/server-proxy-svgrepo-com.svg" />
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="heading mb-3 service-name">Proxy Server</h3>
          <p>Giúp bạn tạo ra các proxy server nhanh chóng và dễ dàng.</p>
        </div>
      </div>
      <div class="service-item px-5 py-20 bg-[#fdcb6e] text-dark flex flex-col gap-5">
        <div>
          <img height="80" width="80" src="@/assets/icons/svg/writing.svg" />
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="heading mb-3 service-name">Viết Blog</h3>
          <p>Chia sẻ kiến thức, tạo kết nối với độc giả và tác giả thông qua các bài viết.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped src="./styles.scss"></style>