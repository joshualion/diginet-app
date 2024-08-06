<template>
  <div class="main-banner" id="top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="caption header-text">
               
                <h4>Transform <em> your business</em> with <br> our <span> innovative Web Solutions!</span></h4>
                  
                <P><strong> Diginet</strong> is your premier destination for innovative web development services. 
                  Utilizing robust tech stacks, including Laravel for backend development, VueJS for frontend brilliance, and both Bootstrap & Tailwind CSS for sleek, responsive designs.</P> <p> We create stunning, high-performance web applications tailored to your business needs. 
                  In addition to custom development, we offer ready-made solutions for various industries. We design these solutions to meet the specific needs of sectors such as healthcare, government, hospitality, media houses, Faith based organizations and more.</p>
                <div class="main-button scroll-to-section"><a style="color:#fff !important;"href="#services">Explore Services</a></div>
                <span> </span>
                <div class="second-button"><a style="color:#fff !important;"href="faqs.html">Explore Solutions</a></div>
              </div>
            </div>
          </div>
        </div>
  </div>

  <div class="row">
    <div class="container">
       <hr/>
             <div class="col-lg-12">
                <div class="text-center mt-0 mb-5">              
                    <h1>Our<span> Services </span></h1>
                </div>
            </div>
        <hr/>
        </div>
  </div>  

  <div class="services section" id="services">
    <div class="container">
      <div class="row">           
        <div class="col-lg-6 offset-lg-6 ">           
          <div class="row">  
            <div class="col-lg-6 col-sm-6" v-for="service in services" :key="service.id">
                <div class="service-item">
                  <div class="icon">
                    <h2 class="align-center"> <i :class="service.icon" style="font-size: 48px; color: #A8CF45"></i></h2>
                  </div>
                  <h4>{{service.name}}</h4>
                </div>
              </div>  
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="products section" id="products">

    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <br><h1>Featured <span>Solutions</span></h1><hr style="position:relative; border-color: #A8CF45; padding-top:0px;">          
            </div>
        </div>

         <div class="col-sm-3  mt-3 mt-sm-3 mt-md-2" v-for="product in products" :key="product.id">
              <div class="card shadow" style="width: 12rem;">
              <img src="https://place-hold.it/300/333" class="card-img-top" alt="{{ product.name }}">
              <div class="card-body-sm text-center">
                <h5 class="card-title">{{product.name}}</h5>
              <p class="card-text">{{product.Product_category_id.name}}</p>  
                <a href="#" class="btn btn-dark">View Details</a>
              </div>
            </div>
        </div>
        
          
      </div>
    </div>
  </div>

  <div class="row">
    <div class="container">
      <br>
             <div class="col-lg-12">
                <div class="text-center mt-0 mb-5">              
                    <h1>Latest<span> Posts </span></h1>
                </div>
            </div>
        <hr/>
        </div>
  </div>  
  <div class="container mt-5" id="posts">
      <FrontPagePost />
    
  </div>



  <div class="cta section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h4>Are You Ready To Work &amp; Develop With Us ?<br>Don't Hesitate &amp; Contact Us !</h4>
        </div>
        <div class="col-lg-4">
          <div class="main-button">
            <NuxtLink to="/contact">Contact Us Now!</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  </template>

  <style>
  </style>
  
<script setup>
  import FrontPagePost from '~/components/frontPagePost.vue';

  useHead({
    title: 'Diginet Technologies - Empowered By Innovation',
    meta: [
      { name: 'description', content: 'Diginet Technologies' },
      { name: 'keywords', content: 'Diginet, Technologies' }
    ]
  })

  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;
    // Fetch services
    const { data: ourServices } = await useFetch(apiBase+'/api/services');
   // store data using useState()
   const services = useState('services', () => ourServices.value);

   //Fetch Products
   const { data: ourProducts} = await useFetch(apiBase+'/api/products');

   // store products useState()
   const products = useState('products', ()=>ourProducts.value)


  
   
  </script>

