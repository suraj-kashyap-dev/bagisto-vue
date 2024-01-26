<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <v-router-link
        to="/"
        class="flex items-center mb-6 mt-10 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img src="../../assets/images/logo.svg" />
      </v-router-link>

      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Register in to your account
          </h1>

          <!-- Register Form -->
          <vee-form v-slot="{ meta, errors, handleSubmit }">
            <form
              @submit.prevent="handleSubmit($event, register)"
              class="space-y-4 md:space-y-6"
            >
              <div>
                <v-label for="email">Your First Name</v-label>

                <v-input
                  type="text"
                  name="first_name"
                  id="first_name"
                  rules="required"
                  placeholder="Enter your first name"
                  label="First Name"
                />

                <v-error control-name="first_name" />
              </div>

              <div>
                <v-label for="email">Your Last Name</v-label>

                <v-input
                  type="text"
                  name="last_name"
                  id="last_name"
                  rules="required"
                  placeholder="Enter your first name"
                  label="Last Name"
                />

                <v-error control-name="last_name" />
              </div>

              <div>
                <v-label for="email">Your Email</v-label>

                <v-input
                  type="text"
                  name="email"
                  id="email"
                  rules="required"
                  placeholder="Enter your email address"
                  label="Email"
                />

                <v-error control-name="email" />
              </div>

              <div>
                <v-label for="password">Password</v-label>

                <v-input
                  type="password"
                  name="password"
                  id="password"
                  rules="required"
                  placeholder="••••••••"
                  label="Password"
                />

                <v-error control-name="password" />
              </div>

              <div>
                <v-label for="password_confirmation">Confirm Password</v-label>

                <v-input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  rules="confirmed:@password"
                  placeholder="••••••••"
                  label="Confirm Password"
                />

                <v-error control-name="password_confirmation" />
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      aria-describedby="remember"
                    />
                  </div>

                  <div class="ml-3 text-sm">
                    <v-label for="remember">Remember me</v-label>
                  </div>
                </div>

                <v-router-link
                  to="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </v-router-link>
              </div>

              <!-- Register Button -->
              <v-button type="submit"> Register </v-button>

              <!-- Sign up button link -->
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?
                <v-router-link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </v-router-link>
              </p>
            </form>
          </vee-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {};
  },

  methods: {
    register(params) {
      this.$axios
        .post("http://localhost:8000/api/v1/customer/register", params)
        .then((res) => {
          if (res.status == 200) {
            // alert(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
