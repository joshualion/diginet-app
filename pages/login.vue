<template>
  <!-- Log In page -->
  <div class="container-md">
        <div class="row vh-100 d-flex justify-content-center">
            <div class="col-12 align-self-center">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-4 mx-auto">
                            <div class="card">
                                <div class="card-body p-0 auth-header-box">
                                    <div class="text-center p-3">
                                        <AuthLogoLink></AuthLogoLink> 
                                    </div>
                                </div>
                                <div class="card-body pt-0">                                    
                                    <form class="my-4" @submit.prevent="loginUser">            
                                        <div class="form-group mb-2">
                                            <label class="form-label" for="email">Email</label>
                                            <input v-model="email" type="text" class="form-control" id="email" name="email" placeholder="Enter email">                               
                                        </div><!--end form-group--> 
            
                                        <div class="form-group">
                                            <label class="form-label" for="userpassword">Password</label>                                            
                                            <input v-model="password" type="password" class="form-control" name="password" id="userpassword" placeholder="Enter password">                            
                                        </div><!--end form-group--> 
            
                                        <div class="form-group row mt-3">
                                            <div class="col-sm-6">
                                                <div class="form-check form-switch form-switch-success">
                                                    <input v-model="keepLoggedIn" class="form-check-input"  type="checkbox" id="customSwitchSuccess" name="keepLoggedIn">
                                                    <label class="form-check-label" for="customSwitchSuccess">Remember me</label>
                                                </div>
                                        </div><!--end col--> 
                                            <div class="col-sm-6 text-end">
                                                <NuxtLink to="/auth-recover-pw" class="text-muted font-13"><i class="dripicons-lock"></i> Forgot password?</NuxtLink>                                    
                                            </div><!--end col--> 
                                        </div>
                                        
                                        <!--end form-group-->            
                                        <div class="form-group mb-0 row">
                                            <div class="col-12">
                                                <div class="d-grid mt-3">
                                                    <button class="btn btn-primary" type="submit">Log In <i class="fas fa-sign-in-alt ms-1"></i></button>
                                                </div>
                                            </div>
                                        </div> 
                                        <!--end form-group--> 

                                    </form><!--end form-->
                                    <div class="m-3 text-center text-muted">
                        <p class="mb-0">Don't have an account ? <NuxtLink to="/register" class="text-primary ms-2">Sign Up</NuxtLink></p>
                                    </div>
                                    <hr class="hr-dashed mt-4">
                                    <div class="text-center mt-n5">
                                        <h6 class="card-bg px-3 my-4 d-inline-block">Or Login With</h6>
                                    </div>
                                    <socialLogin></socialLogin>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end card-body-->
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
 
</template>


<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

useHead({
    title: 'Login | Diginet Technologies - Empowered By Innovation',
    meta: [
      { name: 'description', content: 'Login - Diginet Technologies' },
      { name: 'keywords', content: 'login, clientarea, dashboard, Diginet, Technologies' }
    ]
  })

import { ref } from 'vue'
import { login } from '~/composables/useAuth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const keepLoggedIn = ref(false) // Add a ref for the checkbox

const router = useRouter()

const loginUser = async () => {
  try {
    await login({ email: email.value, password: password.value, keepLoggedIn: keepLoggedIn.value })
    alert('Login successful')
    router.push('/')
  } catch (error: any) {
    alert('Login failed: ' + error.message)
  }
}
</script>

<style>

</style>