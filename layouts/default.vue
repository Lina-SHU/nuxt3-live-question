<script setup></script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">首頁</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/room" class="nav-link">房型介紹</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/register" class="nav-link">註冊</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container">
    <slot />
  </main>
</template>
<style scoped></style>