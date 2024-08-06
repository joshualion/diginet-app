export default defineNuxtConfig({
  devtools: { 
    enabled: false,


  },  

  modules: ["@nuxt/image"],
  
   

  runtimeConfig: {
    public: {
      
      apiBase: process.env.NODE_ENV === 'production' 
        ? 'https://diginettechnologies.com' 
        : 'localhost:8000',
           
    }
  }

  
 
  
  


})