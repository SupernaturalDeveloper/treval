<template>
    <div>
        我的
        <!-- 下方tabBar -->
        <main-tab-bar />
    </div>
</template>
<script>
    import MainTabBar from "@/components/TabBar/MainTabBar.vue";
    export default {
        name: "Main",
        components: {
            MainTabBar,
        },
    };
</script>
<style scoped lang="scss">
</style>
