<template>
  <body id="body" class="auth-page">
    <slot />
  </body>
</template>

<script setup>
useHead({
  script: [
    {
      src: '/libs/bootstrap/js/bootstrap.bundle.min.js',
      type: 'text/javascript',
      async: true,
    },
    {
      src: '/libs/simplebar/simplebar.min.js',
      type: 'text/javascript',
      async: true,
    },
    
   
    
    {
      src: '/js/app.js',
      type: 'text/javascript',
      async: true,
    },
  ]
});
</script>

<style>
@import url(../assets/admin/css/bootstrap.min.css);
@import url(../assets/admin/css/icons.min.css);
@import url(../assets/admin/css/app.min.css);
@import url(../assets/css/style.css);
</style>
