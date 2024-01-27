<script setup>
import { useAuthStore } from "@/stores/modules/auth";

const userStore = useAuthStore();
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <v-router-link
        to="/"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img loading="lazy" src="../../assets/images/logo.svg" />
      </v-router-link>

      <template if="userStore.isAuthenticated">
        name : {{ userStore.user }}
      </template>

      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Login in to your account
          </h1>

          <!-- Login Form -->
          <vee-form as="div" v-slot="{ meta, errors, handleSubmit }">
            <form
              @submit.prevent="handleSubmit($event, userStore.login)"
              class="space-y-4 md:space-y-6"
            >
              <v-input
                type="hidden"
                name="device_name"
                id="device_name"
                value="chrome"
                rules="required"
              />

              <div>
                <v-label for="email">Your Email</v-label>

                <v-input
                  type="text"
                  name="email"
                  id="email"
                  rules="required"
                  placeholder="Enter your email address"
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
                />

                <v-error control-name="password" />
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <v-input
                      type="checkbox"
                      id="remember"
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

              <!-- login Button -->
              <v-button type="submit"> Login </v-button>

              <!-- Sign in button link -->
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?
                <v-router-link
                  to="/register"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </v-router-link>
              </p>
            </form>
          </vee-form>
        </div>
      </div>
    </div>
  </section>
</template>
