<template>
    <div class="navBar">
        <nav-bar v-for="(arr, index) in navBarList" :key="index">
            <nav-bar-item :to="item.to" v-for="item in arr" :key="item.id">
                <template #nav-icon>
                    <img :class="{ navImgWH: index > 0 }" :src="item.src" />
                </template>
                <template #nav-text>
                    <div>
                        {{ item.text }}
                    </div>
                </template>
            </nav-bar-item>
        </nav-bar>
    </div>
</template>

<script>
    import navBar from "@/components/HomeCpn/NavBar/NavBar.vue";
    import navBarItem from "@/components/HomeCpn/NavBar/NavBarItem.vue";
    export default {
        name: "MainNavBar",
        components: {
            navBar,
            navBarItem,
        },
        data() {
            return {
                navBarList: [
                    [
                        {
                            id: "0-1",
                            src: require("@/assets/img/home/navBar/hotel.png"),
                            text: "酒店",
                            to: "/details/hotel",
                        },
                        {
                            id: "0-2",
                            src: require("@/assets/img/home/navBar/flight.png"),
                            text: "机票",
                            to: "/details/flight",
                        },
                        {
                            id: "0-3",
                            src: require("@/assets/img/home/navBar/train.png"),
                            text: "火车票",
                            to: "/details/train",
                        },
                        {
                            id: "0-4",
                            src: require("@/assets/img/home/navBar/package.png"),
                            text: "度假",
                            to: "/details/package",
                        },
                        {
                            id: "0-5",
                            src: require("@/assets/img/home/navBar/piao.png"),
                            text: "景点门票",
                            to: "/details/piao",
                        },
                    ],
                    [
                        {
                            id: "1-1",
                            src: require("@/assets/img/home/navBar/1-0.png"),
                            text: "海外酒店",
                        },
                        {
                            id: "1-2",
                            src: require("@/assets/img/home/navBar/1-1.png"),
                            text: "低价机票",
                        },
                        {
                            id: "1-3",
                            src: require("@/assets/img/home/navBar/1-2.png"),
                            text: "汽车票船票",
                        },
                        {
                            id: "1-4",
                            src: require("@/assets/img/home/navBar/1-3.png"),
                            text: "自由行",
                        },
                        {
                            id: "1-5",
                            src: require("@/assets/img/home/navBar/1-4.png"),
                            text: "攻略",
                        },
                    ],
                    [
                        {
                            id: "2-1",
                            src: require("@/assets/img/home/navBar/2-0.png"),
                            text: "民宿客栈",
                        },
                        {
                            id: "2-2",
                            src: require("@/assets/img/home/navBar/2-1.png"),
                            text: "专车自驾",
                        },
                        {
                            id: "2-3",
                            src: require("@/assets/img/home/navBar/2-2.png"),
                            text: "赚钱信用卡",
                        },
                        {
                            id: "2-4",
                            src: require("@/assets/img/home/navBar/2-3.png"),
                            text: "旅游团购",
                        },
                        {
                            id: "2-5",
                            src: require("@/assets/img/home/navBar/2-4.png"),
                            text: "一日游",
                        },
                    ],
                    [
                        {
                            id: "3-1",
                            src: require("@/assets/img/home/navBar/3-0.png"),
                            text: "特惠酒店",
                        },
                        {
                            id: "3-2",
                            src: require("@/assets/img/home/navBar/3-1.png"),
                            text: "借钱",
                        },
                        {
                            id: "3-3",
                            src: require("@/assets/img/home/navBar/3-2.png"),
                            text: "白金卡",
                        },
                        {
                            id: "3-4",
                            src: require("@/assets/img/home/navBar/3-3.png"),
                            text: "行程设计",
                        },
                        {
                            id: "3-5",
                            src: require("@/assets/img/home/navBar/3-4.png"),
                            text: "周末游",
                        },
                    ],
                ],
            };
        },

        mounted() {},

        methods: {},
    };
</script>

<style lang="scss" scoped>
    .navBar {
        background-color: #fff;
    }
    .navBarItem .navBarItem-icon .navImgWH {
        width: 29px;
        height: 29px;
    }
</style>