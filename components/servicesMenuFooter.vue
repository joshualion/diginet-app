<template>
  <li
    class="nav-item mb-2"
    v-for="service in services"
    :key="service.id"
  >
    <a href="#" class="nav-link p-0 text-muted">{{ service.name }}</a>
  </li>
</template>

<script setup>

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
//Fetch Products Category
const { data: servicesParams } = await useFetch(
   apiBase + "/api/services"
);

// store Categories data using useState()
const services = useState(
  "services",
  () => servicesParams.value
);
</script>
