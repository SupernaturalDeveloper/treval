<template>
    <div>
        购物车
        <!-- 下方tabBar -->
        <main-tab-bar />
    </div>
</template>
<script>
    import MainTabBar from "@/components/TabBar/MainTabBar.vue";
    export default {
        name: "Cart",
        components: {
            MainTabBar,
        },
    };
</script>
<style scoped lang="scss">
</style>
