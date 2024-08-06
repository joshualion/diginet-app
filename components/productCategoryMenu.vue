<template>
                  <ul class="sub-menu" >
                    <li v-for="productCategory in productCategories" :key="productCategory.id" >
                    <a href="#">{{ productCategory.name }}</a>
                  </li>               
                  </ul>
</template>

<script setup>
    //Fetch Products Category
    const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
//Fetch Products Category
const { data: productCategoriesParams } = await useFetch(
  apiBase + "/api/product-categories"
);     
      // store Categories data using useState()
    const productCategories = useState('productCategories', () => productCategoriesParams.value)
  
   
</script>