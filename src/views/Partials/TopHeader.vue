<template>
  <div
    class="flex justify-between items-center w-full py-3 px-16 border border-t-0 border-b border-l-0 border-r-0"
  >
    <div class="relative">
      <div class="select-none">
        <div class="flex gap-2.5 cursor-pointer" role="button" tabindex="0">
          <span> ₹ INR </span
          ><span class="text-2xl icon-arrow-down" role="presentation"></span>
        </div>
      </div>
      <div
        class="absolute w-max z-10 overflow-hidden bg-white shadow-[0px_10px_84px_rgba(0,0,0,0.1)] rounded-[20px]"
        tag="div"
        style="min-width: 73px; top: 24px; right: 0px; display: none"
      >
        <div class="p-5 !p-0">
          <div class="grid gap-1 mt-2.5 pb-2.5">
            <span
              class="px-5 py-2 text-base cursor-pointer hover:bg-gray-100 bg-gray-100"
              >₹ INR</span
            >
          </div>
        </div>
      </div>
    </div>
    <p class="text-xs font-medium">
      Get UPTO 40% OFF on your 1st order
      <a href="http://localhost:8000" class="underline">SHOP NOW</a>
    </p>
    <div class="relative">
      <div class="select-none">
        <div
          class="flex items-center gap-2.5 cursor-pointer"
          role="button"
          tabindex="0"
        >
          <img
            src="http://localhost:8000/storage/locales/JEeydVTlnUWymXRABHHVEwyiJakVkfpbo7RDOucG.png"
            class="h-full"
            alt="Default locale"
            width="24"
            height="16"
          /><span> English </span
          ><span class="icon-arrow-down text-2xl" role="presentation"></span>
        </div>
      </div>
      <div
        class="absolute w-max z-10 overflow-hidden bg-white shadow-[0px_10px_84px_rgba(0,0,0,0.1)] rounded-[20px]"
        tag="div"
        style="min-width: 124px; top: 24px; right: 0px; display: none"
      >
        <div class="p-5 !p-0">
          <div class="grid gap-1 mt-2.5 pb-2.5">
            <span
              class="flex items-center gap-2.5 px-5 py-2 text-base cursor-pointer hover:bg-gray-100 bg-gray-100"
              ><img
                src="http://localhost:8000/storage/locales/JEeydVTlnUWymXRABHHVEwyiJakVkfpbo7RDOucG.png"
                width="24"
                height="16"
              />
              English</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
