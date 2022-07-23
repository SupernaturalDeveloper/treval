<template>
    <div class="header">
        <i class="back"></i>
        <div class="input">
            <input type="text" />
        </div>
        <div class="city">
            <router-link to="/cityList">{{ cityName }}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderCpn",
        computed: {
            cityName() {
                return this.$route.query.name;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .header {
        widows: 100%;
        padding: 0 0.3rem;
        box-sizing: border-box;
        height: 0.88rem;
        background: #00bcd4;
        line-height: 0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .back {
        width: 1rem;
        height: 0.44rem;
        background: url(../../../assets/img/返回.png) no-repeat;
        background-size: 0.4rem 0.4rem;
    }
    .city {
        width: 1rem;
        height: 0.88rem;
        color: #fff;
        font-size: 0.32rem;
        position: relative;
        a {
            color: #fff;
        }
    }
    .city::after {
        content: "";
        width: 0.4rem;
        height: 0.4rem;
        background: url(../../../assets/img/下拉.png) no-repeat;
        background-size: 0.4rem;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .header .input {
        flex: 1;
    }
    .header .input input {
        display: block;
        width: 95%;
        margin: 0 auto;
        height: 0.6rem;
        border: none;
        border-radius: 0.06rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
</style>