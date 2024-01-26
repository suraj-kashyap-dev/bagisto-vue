<template>
    <swiper 
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide
            v-for="index in 5"
            :key="index"
        >
            <img src="https://68.media.tumblr.com/57836ee52bc9355ad7c5fed5abf91ccc/tumblr_oiboo6MaRS1slhhf0o1_1280.jpg">
        </swiper-slide>
    </swiper>
</template>

<script>
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, Pagination, Mousewheel, Keyboard],
        };
    },
};
</script>
  

<style>
#app {
    height: 100%;
}

html,
body {
    position: relative;
    height: 100%;
}


.swiper {
    width: 100%;
    height: 70%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>