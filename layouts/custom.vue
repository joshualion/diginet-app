<template>
       

      <!-- leftbar-tab-menu -->
      <adminLeftBarMenu />
      <!-- end leftbar-tab-menu-->

       
        <!-- Top Bar Start -->
        <adminTopBar/>
        <!-- Top Bar End -->

      

  <!-- Output page content -->
  <div> 
    <slot />
   </div>

    <!--Start Footer-->
    <AdminFooter/>
    <!-- end Footer -->

        
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
  
</script>


<style>

@import url(../assets/admin/css/bootstrap.min.css);
@import url(../assets/admin/css/icons.min.css);
@import url(../assets/admin/css/app.min.css);
@import url(../assets/css/style.css);

</style>
