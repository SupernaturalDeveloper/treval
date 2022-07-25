<template>
    <div>
        <!-- 头部搜索 -->
        <header-cpn />
        <!-- 轮播图 -->
        <swiper-demo :list="swiperList" />
        <!-- 图标区域 -->
        <main-nav-bar-vue />
        <!-- hotList -->
        <hot-list :recommendList="recommendList" />
        <!-- list -->
        <list :weekendList="weekendList" />
        <!-- weekList -->
        <week-list :weekendList="weekendList" />
        <!-- 下方tabBar -->
        <main-tab-bar />
    </div>
</template>
<script>
    import MainNavBarVue from "./components/MainNavBar.vue";
    import HeaderCpn from "./components/HeaderCpn.vue";
    import SwiperDemo from "@/components/Swiper/SwiperDemo";
    import MainTabBar from "@/components/TabBar/MainTabBar.vue";
    import List from "@/views/home/components/List.vue";
    import HotList from "@/views/home/components/HotList.vue";
    import WeekList from "@/views/home/components/WeekList.vue";
    export default {
        name: "Home",
        components: {
            HeaderCpn,
            SwiperDemo,
            MainNavBarVue,
            MainTabBar,
            List,
            HotList,
            WeekList,
        },
        mounted() {
            document.documentElement.scrollTop = 0;
            this.$axios.get("/static/mock/index.json").then(res => {
                // console.log(res);
                this.swiperList = res.data.data.swiperList;
                this.recommendList = res.data.data.recommendList;
                this.weekendList = res.data.data.weekendList;
            });

            setTimeout(() => {
                this.$LazyLoading.init(".laz", "src");
                // console.log(document.querySelectorAll(".laz"));
            }, 1000);
            // if (!this.$route.query.name) {
            //     this.$router.push("/home?name=北京");
            // }
        },
        data() {
            return {
                swiperList: [],
                recommendList: [],
                weekendList: [],
            };
        },
    };
</script>
<style scoped lang="scss">
</style>
