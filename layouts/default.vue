<template>
 
  <!-- ***** Preloader Start ***** -->
  <div v-if="loading" id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- ***** Preloader End ***** -->

  <!-- ***** Pre-Header Area Start ***** -->
  <div class="pre-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-9">
          <div class="left-info">
            <ul style="font-weight: 500;">
              <li><a href="#"><i class="fa fa-phone"></i>+234-904-8848-395</a></li>
              <li><a href="#"><i class="fa fa-envelope"></i>info@diginettechnologies.com</a></li>
              <li><a href="#"><i class="fa fa-map-marker"></i>116 Parliamentary Road, Calabar </a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-sm-3">
          <div class="social-icons">
           
            <!-- <NuxtLink to="/signup"> <button class="btn btn-success gap-3 mr-2 p-2"><i class="fas fa-edit"></i> Sign Up</button></NuxtLink>
          -->
             <NuxtLink to="/login"><button class="btn btn-dark gap-3 ml-2 "><i class="fas fa-sign-in-alt"></i> Sign In</button></NuxtLink>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Pre-Header Area End ***** -->

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="/" class="logo">
              <img src="assets/images/logo.png" alt="" style="max-width: 112px;">
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><NuxtLink  to="/" class="active">Home</NuxtLink></li>
              <li><NuxtLink to="/about">About Us</NuxtLink></li>
              <li class="scroll-to-section"><NuxtLink to="/#services">Services</NuxtLink></li>
              <li class="scroll-to-section has-sub"><NuxtLink to="/#projects">Solutions</NuxtLink>
                <productCategoryMenu></productCategoryMenu>
                </li>
              <li><NuxtLink to="/faq">FAQs</NuxtLink></li>
             
              <li class="scroll-to-section"><NuxtLink to="/#infos">Infos</NuxtLink></li>
              <li class="scroll-to-section"><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
<!-- Output page content -->
   <div> <slot />
   </div>

  <div class="container">
  <footer class="py-5">
    <div class="row ">
      <div class="col-2">
        <h5>Company</h5><br>
        <ul class="nav flex-column border-top">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Team</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Clients</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Testimonials</a></li>
          <li class="nav-item mb-2"><a href="/faq" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy Policy</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Terms & Conditions</a></li>
        </ul>
      </div>

      <div class="col-2">
        <h5>Products</h5><br>
          <ul class="nav flex-column border-top">
            <productCategoryMenuFooter />
          </ul>
      </div>

      <div class="col-2">
        <h5>Latest Posts</h5><br>
        <ul class="nav flex-column border-top">
          <postsMenuFooter />
        </ul>
      </div>

      <div class="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5><br>
          <p class="border-top">Monthly digest of whats new & exciting from us.</p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
            <button class="btn btn-dark btn-lg" type="button"><a href="#">Subscribe</a></button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex justify-content-between py-4 my-4 border-top">
      <p class="py-2">&copy; {{ currentYear }} Diginet Tech Africa Ltd. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a  href="#"><i class="fab fa-facebook" width="48" height="48" ></i></a></li>
        <li class="ms-3"><a  href="#"><i class="fab fa-twitter" width="48" height="48" ></i></a></li>
        <li class="ms-3"><a  href="#"><i class="fab fa-linkedin"  width="48" height="48"></i></a></li>
        <li class="ms-3"><a  href="#"><i class="fab fa-google-plus"  width="48" height="48"></i></a></li>
        </ul>
    </div>
  </footer>
</div>
</template>

<script>

export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      loading: true,
    }
  },
  mounted() {
   setTimeout(() => {
      this.loading = false;
    }, 2000); // 2 seconds delay for demonstration
  },

   



};

   

</script>

<style>
    @import url(../assets/css/bootstrap.min.css);
    @import url(../assets/css/style.css);
    @import url(../assets/css/fontawesome.css);
    @import url(../assets/css/templatemo-tale-seo-agency.css);
    @import url(../assets/css/owl.css);
    @import url(../assets/css/animate.css);
    @import url(../assets/css/swiper-bundle.min.css);

</style>