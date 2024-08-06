<template>
    <div class="row">
            <div class="col-sm-12">
                <div class="page-title-box">
                    <div class="float-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><NuxtLink to="/administrator/">Admin</NuxtLink>
                            </li><!--end nav-item-->
                            <li class="breadcrumb-item"><NuxtLink to="/administrator/">Dashboard</NuxtLink>
                            </li><!--end nav-item-->
                            <li class="breadcrumb-item active">{{  pageTitle }}</li>
                        </ol>
                    </div>
                    <h4 class="page-title">{{ pageTitle }}</h4>
                </div><!--end page-title-box-->
            </div><!--end col-->
    </div>
</template>


<script setup>

const props = defineProps({
  pageTitle: {
    type: String,
    required: true
  }
});

</script>