<script setup>
import Dropdown from "@/components/Dropdown/Index.vue";
import { FreeStyleShimmer } from "vue3-shimmer";
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/modules/auth";
import { useCategoriesStore } from "@/stores/modules/categories";

const authStore = useAuthStore();
const categoriesStore = useCategoriesStore();

onMounted(() => {
  categoriesStore.getCategories();
});
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4"
    >
      <v-router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          loading="lazy"
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Bagisto</span
        >
      </v-router-link>

      <div
        class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <div
          class="flex items-center pr-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          v-if="authStore.isAuthenticated"
        >
          <a href="/" aria-label="Cart">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M4 4c0-.6.4-1 1-1h1.5c.5 0 .9.3 1 .8L7.9 6H19a1 1 0 0 1 1 1.2l-1.3 6a1 1 0 0 1-1 .8h-8l.2 1H17a3 3 0 1 1-2.8 2h-2.4a3 3 0 1 1-4-1.8L5.7 5H5a1 1 0 0 1-1-1Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div
          v-if="authStore.isAuthenticated"
          class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
        >
          <button
            type="button"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
          <!-- Dropdown menu -->
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span
                class="block text-sm text-gray-900 dark:text-white"
                v-text="authStore.user.name"
              ></span>
              <span
                class="block text-sm text-gray-500 truncate dark:text-gray-400"
                v-text="authStore.user.email"
              ></span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  @click="authStore.logout()"
                  class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div v-else>
          <v-router-link
            :to="{ name: 'login' }"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign in
            <svg
              class="hidden w-3 h-3 ml-2 xl:inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              ></path>
            </svg>
          </v-router-link>
        </div>

        <button
          data-collapse-toggle="mega-menu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        id="mega-menu"
        class="items-left justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse"
        >
          <free-style-shimmer
            v-for="index in 4"
            :is-loading="!categoriesStore.categories.length"
            height="20px"
            width="80px"
            color="#bdbdbd"
          />

          <li v-for="category in categoriesStore.categories">
            <v-router-link
              :to="{
                name: 'category.details',
                params: { slug: category.slug },
              }"
              class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              {{ category.name }}
            </v-router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
