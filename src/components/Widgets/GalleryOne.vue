<template>
  <!-- section_2 -->
  <div class="max-w-screen-2xl mx-auto px-2 py-10 lg:py-10 relative bg-white">
    <div class="flex flex-col md:flex-row gap-2">
      <div class="flex flex-1 flex-col">
        <a :href="images[0].link">
          <div class="flex flex-1 flex-col">
            <!-- img_01 -->
            <img
              loading="lazy"
              class="object-cover h-full"
              :src="images[0].src"
              :alt="images[0].alt"
            />
          </div>
        </a>
      </div>
      <div class="flex flex-1">
        <div class="grid grid-cols-2 gap-2">
          <a :href="images[1].link">
            <div>
              <!-- img_02 -->
              <img
                loading="lazy"
                class="object-cover h-full"
                :src="images[1].src"
                :alt="images[1].alt"
              />
            </div>
          </a>
          <a :href="images[2].link">
            <div>
              <!-- img_03 -->
              <img
                loading="lazy"
                class="object-cover h-full"
                :src="images[2].src"
                :alt="images[2].alt"
              />
            </div>
          </a>
          <a :href="images[3].link">
            <div>
              <!-- img_04 -->
              <img
                loading="lazy"
                class="object-cover h-full"
                :src="images[3].src"
                :alt="images[3].alt"
              />
            </div>
          </a>
          <a :href="images[4].link">
            <div>
              <!-- img_05 -->
              <img
                loading="lazy"
                class="object-cover h-full"
                :src="images[4].src"
                :alt="images[4].alt"
              />
            </div>
          </a>
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
