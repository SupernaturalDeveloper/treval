<template>
    <div>
        <div class="header">
            <i @click="goBack" class="back"></i>
            <div class="title">城市选择</div>
            <city-tab></city-tab>
        </div>
        <div class="contentList">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import CityTab from "@/components/CityTab/CityTab";

    export default {
        name: "CityList",

        components: {
            CityTab,
        },

        data() {
            return {};
        },

        created() {},

        mounted() {},

        methods: {
            goBack() {
                this.$router.go(-1);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        padding: 0 0.3rem;
        box-sizing: border-box;
        background: #00bcd4;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        .title {
            height: 0.88rem;
            line-height: 0.88rem;
            font-size: 0.34rem;
        }
    }
    .back {
        width: 1rem;
        height: 0.44rem;
        background: url(@/assets/img/返回.png) no-repeat;
        background-size: 0.4rem 0.4rem;
        position: absolute;
        left: 0.4rem;
        top: 0.2rem;
    }

    .contentList {
        background: rgb(245, 245, 245);
        overflow: hidden;
        padding-top: 1.4rem;
    }
</style>
