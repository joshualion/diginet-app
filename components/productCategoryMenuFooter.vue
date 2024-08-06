<template>
  
    <li class="nav-item mb-2" v-for="productCategory in productCategories" :key="productCategory.id">
    <a href="#" class="nav-link p-0 text-muted">{{ productCategory.name }}</a>
    </li>
  
</template>

<script setup>
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
//Fetch Products Category
const { data: productCategoriesParams } = await useFetch(
  apiBase + "/api/product-categories"
);

// store Categories data using useState()
const productCategories = useState(
  "productCategories",
  () => productCategoriesParams.value
);
</script>
