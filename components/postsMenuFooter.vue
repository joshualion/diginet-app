<template>
  <li class="nav-item mb-2" v-for="post in posts" :key="post.id">
    <a href="#" class="nav-link p-0 text-muted">{{ post.title }}</a>
  </li>
</template>

<script setup>
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
//Fetch Products Category
const { data: postsParams } = await useFetch(apiBase + "/api/latest-posts");

// store Categories data using useState()
const posts = useState("posts", () => postsParams.value);
</script>
