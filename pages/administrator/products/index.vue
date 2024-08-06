
<template>

    <div class="page-wrapper">

            <!-- Page Content-->
            <div class="page-content-tab">
                    <!-- Container -->
                    <div class="container-fluid">
                        <!-- Page-Title & breadcrumb -->
                        <adminPageTitle  v-if="pageTitle" :pageTitle="pageTitle"></adminPageTitle>
                        <!-- End page title & breadcrumb -->
                        

                        <adminProductList></adminProductList>

                    </div>
                    <!-- End container -->

                    <!--Start Rightbar-->
                    <adminRightBarMenu></adminRightBarMenu>
                    <!--end Rightbar-->
                
            </div><!-- end page content -->
            
    </div><!-- end page-wrapper -->
    
</template>

<script setup>

definePageMeta({
  layout: 'custom',
})

const pageTitle = ref('Products'); // Set your dynamic title here

    useHead({
        title: 'Diginet Technologies | Admin Products List - Empowered By Innovation',
        meta: [
            { name: 'robots', content: 'noindex, nofollow' },
            { name: 'keywords', content: 'Diginet, Technologies,  Products, listing, web, development, web services, websites, web applications' },
            { name: 'description', content: 'Diginet Technologies - Fullstack web products & services' }
    ],
    
    });


 
</script>