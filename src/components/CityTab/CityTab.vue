<template>
    <div class="tabBox">
        <div
            @click="onClick('domestic')"
            :class="{ active: flag == 'domestic' }"
        >
            境内
        </div>
        <div
            @click="onClick('overseas')"
            :class="{ active: flag == 'overseas' }"
        >
            境外·港澳台
        </div>
    </div>
</template>

<script>
    export default {
        name: "CityTab",

        data() {
            return {};
        },

        computed: {
            flag() {
                if (this.$route.path.includes("domestic")) return "domestic";
                if (this.$route.path.includes("overseas")) return "overseas";
            },
        },
        mounted() {},

        methods: {
            onClick(to) {
                this.$router.replace("/cityList/" + to);
                this.$emit("putInParmas", to);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .tabBox {
        display: flex;
        width: 80%;
        height: 20px;
        line-height: 20px;
        border: 1px solid #fff;
        border-radius: 3px;
        margin-bottom: 5px;
        div {
            flex: 1;
            text-align: center;
        }
        .active {
            background-color: #fff;
            color: rgb(0, 188, 212);
        }
    }
</style>
