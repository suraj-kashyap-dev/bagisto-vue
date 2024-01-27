<template>
  <div class="max-w-screen-2xl mx-auto px-2 mt-10 relative">
    <div class="flex flex-col md:flex-row gap-2">
      <div class="flex flex-1 flex-col gap-2">
        <div class="flex flex-1 flex-col">
          <img loading="lazy" class="object-cover h-full" :src="images[0]" />
        </div>
        <div class="hidden md:flex flex-1 flex-row gap-2">
          <div class="flex flex-1 flex-col">
            <img loading="lazy" class="object-cover h-full" :src="images[1]" />
          </div>
          <div class="hidden md:flex flex-1 flex-col">
            <img loading="lazy" class="object-cover h-full" :src="images[2]" />
          </div>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-2">
        <div class="hidden md:flex flex-1 flex-row gap-2">
          <div class="flex flex-1 flex-col">
            <img loading="lazy" class="object-cover h-full" :src="images[3]" />
          </div>
          <div class="hidden md:flex flex-1 flex-col">
            <img loading="lazy" class="object-cover h-full" :src="images[4]" />
          </div>
        </div>
        <div class="flex flex-1 flex-col">
          <img loading="lazy" class="object-cover h-full" :src="images[5]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryOne",
  props: ["images"],
};
</script>
