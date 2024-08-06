
<template>

    <div class="page-wrapper">

            <!-- Page Content-->
            <div class="page-content-tab">
                    <!-- Container -->
                    <div class="container-fluid">
                        <!-- Page-Title & breadcrumb -->
                        <adminPageTitle  v-if="pageTitle" :pageTitle="pageTitle"></adminPageTitle>
                        <!-- End page title & breadcrumb -->
                        
                        <!--Dashboard row-->        
                        <adminDashboard></adminDashboard>
                        <!--end Dashboard row-->

                    </div>
                    <!-- End container -->

                    <!--Start Rightbar-->
                    <adminRightBarMenu></adminRightBarMenu>
                    <!--end Rightbar-->
                
            </div><!-- end page content -->
            
    </div><!-- end page-wrapper -->
    
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'custom',
  middleware: 'auth'
})


const pageTitle = ref('Dashboard'); 

useHead({
        title: 'Diginet Technologies | Admin Dashboard - Empowered By Innovation',
        meta: [
            { name: 'robots', content: 'noindex, nofollow' },
            { name: 'keywords', content: 'Diginet, Technologies,  Dashboard, Panel, web, development, web services, websites, web applications' },
            { name: 'description', content: 'Diginet Technologies - fullstack web development services' }
    ],
   
    });


 
</script>