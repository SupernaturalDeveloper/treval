<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img
                        src="http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
                        alt=""
                    />
                </div>
                <div class="swiper-slide">
                    <img
                        src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
                        alt=""
                    />
                </div>
                <div class="swiper-slide">
                    <img
                        src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <!-- <swiper>
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper> -->
    </div>
</template>

<script>
    //   import SwiperClass, { Pagination } from 'swiper'
    //   import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

    //   // import swiper module styles
    //   import 'swiper/css'
    //   import 'swiper/css/pagination'
    // more module style...
    export default {
        name: "SwiperDemo",
        // components: {
        //       Swiper,
        //       SwiperSlide
        //     },
        data() {
            return {};
        },

        mounted() {
            new Swiper(".swiper-container", {
                loop: true, // 循环模式选项
            });
        },

        methods: {},
    };
</script>

<style lang="scss" scoped>
    .swiper-container {
        width: 100%;
        height: 200px;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
