<template>
  <header class="w-screen px-8 py-6 flex justify-between items-center">
    <div class="font-bold font-italic">
      Bruce's Blog
    </div>
    <nav>
      <NuxtLink to="/">
        <ABtn variant="text">
          About
        </ABtn>
      </NuxtLink>
      <NuxtLink to="/projects">
        <ABtn variant="text">
          Projects
        </ABtn>
      </NuxtLink>
      <NuxtLink to="/contact">
        <ABtn variant="text">
          Contact
        </ABtn>
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>