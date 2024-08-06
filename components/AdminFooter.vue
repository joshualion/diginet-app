<template>
     <!-- Footer Start -->
     <footer class="footer text-center text-sm-start">
      <span class="text-muted d-none d-sm-inline-block float-end mr-3">  |&raquo Version 1.0 </span> <span class="text-muted  d-sm-inline-block float-end"> &copy; {{ currentYear }} Diginet Tech Africa Ltd &raquo|&raquo All Rights Reserved &raquo  </span> 
    </footer> 
</template>

<script setup>

 const currentYear = new Date().getFullYear()
  
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
      src: '/libs/feather-icons/feather.min.js',
      type: 'text/javascript',
      async: true,
    },

    {
      src: '/libs/apexcharts/apexcharts.min.js',
      type: 'text/javascript',
      async: true,
    },
   
    {
      src: '/libs/litepicker/js/litepicker.js',
      type: 'text/javascript',
      async: true,
    },

    {
      src: '/js/pages/ecommerce-index.init.js',
      type: 'text/javascript',
      async: true,
    },
    {
      src: '/js/pages/projects-index.init.js',
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
@import url(../public/libs/litepicker/css/litepicker.css);
@import url(../assets/admin/css/app.min.css);
@import url(../assets/css/style.css);

</style>