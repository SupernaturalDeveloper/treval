<template>
    <tab-bar>
        <tab-bar-item v-for="item in tabBarList" :key="item.id" :to="item.to">
            <template #item-icon>
                <img :src="item.icon.icon" alt="" />
            </template>
            <template #item-icon-active>
                <img :src="item.icon.activeIcon" alt="" />
            </template>
            <template #item-text>
                <div>
                    {{ item.text }}
                </div>
            </template>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "@/components/TabBar/TabBar";
    import TabBarItem from "@/components/TabBar/TabBarItem";
    export default {
        name: "MainTabBar",

        data() {
            return {
                tabBarList: [
                    {
                        id: 1,
                        to: "/home",
                        // ActiveXStyle:{},
                        icon: {
                            icon: require("@/assets/img/tabBar/home-off.png"),
                            activeIcon: require("@/assets/img/tabBar/home-on.png"),
                        },
                        text: "首页",
                    },
                    {
                        id: 2,
                        to: "/category",
                        // ActiveXStyle:{},
                        icon: {
                            icon: require("@/assets/img/tabBar/intera-off.png"),
                            activeIcon: require("@/assets/img/tabBar/intera-on.png"),
                        },
                        text: "分类",
                    },
                    {
                        id: 3,
                        to: "/cart",
                        // ActiveXStyle:{},
                        icon: {
                            icon: require("@/assets/img/tabBar/shop-off.png"),
                            activeIcon: require("@/assets/img/tabBar/shop-on.png"),
                        },
                        text: "购物车",
                    },
                    {
                        id: 4,
                        to: "/main",
                        // ActiveXStyle:{},
                        icon: {
                            icon: require("@/assets/img/tabBar/main-off.png"),
                            activeIcon: require("@/assets/img/tabBar/main-on.png"),
                        },
                        text: "我的",
                    },
                ],
            };
        },
        components: {
            TabBar,
            TabBarItem,
        },
        mounted() {},

        methods: {},
    };
</script>

<style lang="scss" scoped>
</style>