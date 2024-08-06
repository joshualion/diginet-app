<template>
  <div class="container-md">
    <div class="row vh-100 d-flex justify-content-center">
      <div class="col-12 align-self-center">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4 mx-auto">
              <div class="card">
                <div class="card-body p-0 auth-header-box">
                  <div class="text-center p-3">
                    <AuthLogoLink> </AuthLogoLink>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <form class="my-4" @submit.prevent="registerUser">
                    <div class="form-group mb-2">
                      <label class="form-label" for="firstname"
                        >First Name</label
                      >
                      <input
                        v-model="firstname"
                        type="text"
                        class="form-control"
                        id="firstname"
                        name="firstname"
                        placeholder="Enter Firstname"
                      />
                    </div>

                    <div class="form-group mb-2">
                      <label class="form-label" for="lastname">Last Name</label>
                      <input
                        v-model="lastname"
                        type="text"
                        class="form-control"
                        id="lastname"
                        name="lastname"
                        placeholder="Enter Lastname"
                      />
                    </div>

                    <div class="form-group mb-2">
                      <label class="form-label" for="email">Email</label>
                      <input
                        v-model="email"
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div class="form-group mb-2">
                      <label class="form-label" for="userpassword"
                        >Password</label
                      >
                      <input
                        v-model="password"
                        type="password"
                        class="form-control"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div class="form-group mb-2">
                      <label class="form-label" for="password_confirmation"
                        >Confirm Password</label
                      >
                      <input
                        v-model="password_confirmation"
                        type="password"
                        class="form-control"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="Enter confirm password"
                      />
                    </div>

                    <div class="form-group mb-0 row">
                      <div class="col-12">
                        <div class="d-grid mt-3">
                          <button class="btn btn-primary" type="submit">
                            Create Account
                            <i class="fas fa-sign-in-alt ms-1"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="m-3 text-center text-muted">
                    <p class="mb-0">
                      Already have an account?
                      <NuxtLink to="/login" class="text-primary ms-2"
                        >Log in</NuxtLink
                      >
                    </p>
                  </div>
                  <hr class="hr-dashed mt-4" />
                  <div class="text-center mt-n5">
                    <h6 class="card-bg px-3 my-4 d-inline-block">
                      Or Signup With
                    </h6>
                  </div>
                  <socialLogin></socialLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Register | Diginet Technologies - Empowered By Innovation",
  meta: [
    { name: "description", content: "Register - Diginet Technologies" },
    {
      name: "keywords",
      content: "Register, clientarea, signup, dashboard, Diginet, Technologies",
    },
  ],
});

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const firstname = ref("");
const lastname = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const router = useRouter();

// Function to retrieve the CSRF token from cookies
const getCsrfTokenFromCookies = () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="));
  return token ? token.split("=")[1] : null;
};

const registerUser = async () => {
  try {
    // Fetch CSRF token and set cookies
    await $fetch(apiBase + "/sanctum/csrf-cookie", {
      credentials: "include",
    });

    // Retrieve CSRF token from cookies
    const csrfToken = getCsrfTokenFromCookies();
    if (!csrfToken) {
      throw new Error("CSRF token not found in cookies");
    }

    console.log("CSRF Token:", csrfToken);

    const response = await $fetch(apiBase + "/register", {
      method: "POST",
      body: {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": csrfToken,
        Referer: document.referrer,
      },
      credentials: "include",
    });

    console.log("Registration Response:", response);

    alert("Registration successful");
    router.push("/login");
  } catch (error) {
    console.error("Registration Error:", error);
    alert("Registration failed: " + error.message);
  }
};
</script>
