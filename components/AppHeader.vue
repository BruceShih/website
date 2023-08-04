<template>
  <div class="navbar bg-base-100 font-sans">
    <div class="flex-1">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">
        Bruce's Blog
      </NuxtLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/"> About </NuxtLink></li>
        <li>
          <NuxtLink to="/blog"> Blog </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact"> Contact </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
