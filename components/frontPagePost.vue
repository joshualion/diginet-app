 
<template>  
  <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <!-- Blog Post 1 -->
            <div class="col" v-for="post in posts" :key="post.id" >
                <div class="card h-100">
                    <img src="https://place-hold.it/300/333" class="card-img-top" alt="Blog Post 1 Image">
                    <div class="card-body">
                        <h5 class="card-title"> {{ post.title }}</h5>
                        <p class="card-text"> {{ post.except }}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        <!-- Blog Post 1 -->
        </div>
    </div>
   
</template>




<script setup>
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
//Fetch Products Category
const { data: postsParams } = await useFetch(apiBase + "/api/latest-posts");

// store Categories data using useState()
const posts = useState("posts", () => postsParams.value.slice(0, 3));
</script>