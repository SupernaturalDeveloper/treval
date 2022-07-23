<template>
    <div>
        b
        <template v-if="citiesData">
            <main-city :citiesData="citiesData"></main-city>
        </template>
    </div>
</template>

<script>
    import MainCity from "@/components/MainCity/MainCity";
    export default {
        name: "DomesticView",
        components: {
            MainCity,
        },
        data() {
            return {
                citiesData: 0,
                flag: 0,
            };
        },

        mounted() {
            const _this = this;
            this.$axios.get("/static/mock/city.json").then(res => {
                _this.citiesData = res.data.data;
            });
        },

        methods: {},
    };
</script>

<style lang="scss" scoped>
</style>