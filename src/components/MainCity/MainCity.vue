<template>
    <div>
        <city-item
            :list="citiesData.hotCities"
            :styleObj="{
                flex: '1 0  30%',
                border: '1px solid #ccc',
                background: '#fff',
            }"
        >
            <template #title> 热门城市 </template>
        </city-item>
        <city-item
            :list="citiesData.cities"
            :styleObj="{ width: '16.66%', background: '#fff' }"
        >
            <template #title> 字母排序 </template>
        </city-item>
        <div v-for="(item, key) in citiesData.cities" :key="key">
            <city-item
                :keyId="key"
                :list="item"
                :styleObj="{
                    flexBasis: ' 24.45%',
                    border: '1px solid #ccc',
                    background: '#fff',
                }"
            >
                <template #title>
                    {{ key }}
                </template>
            </city-item>
        </div>
    </div>
</template>

<script>
    import CityItem from "@/components/CityItem/CityItem";
    export default {
        name: "MainCity",
        props: {
            citiesData: [Array, Object],
        },
        data() {
            return {};
        },
        components: {
            CityItem,
        },
        mounted() {},

        methods: {},
    };
</script>

<style lang="scss" scoped>
</style>