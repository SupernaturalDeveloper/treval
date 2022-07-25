<template>
    <div>
        <input
            placeholder="搜索城市名称"
            class="searchInp"
            type="text"
            @change="onChange"
            v-model="searchText"
        />
        <div class="better-scroll">
            <template v-if="citiesData">
                <main-city :citiesData="citiesData"></main-city>
            </template>
        </div>
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
                searchText: "",
                searchList: [],
            };
        },

        mounted() {
            const _this = this;
            this.$axios.get("/static/mock/city.json").then(res => {
                _this.citiesData = res.data.data;
                // console.log(res);
            });
        },

        methods: {
            onChange() {
                const _this = this;
                this.searchList = [];
                for (let [key, arrItemList] of Object.entries(
                    this.citiesData.cities
                )) {
                    // console.log(arrItemList)
                    arrItemList.forEach(item => {
                        if (item.name.includes(this.searchText)) {
                            _this.searchList.push(item);
                        }
                    });
                }
                console.log(this.searchList);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .searchInp {
        display: block;
        margin: 0.2rem auto;
        width: 70%;
        height: 0.3rem;
        border-radius: 0.15rem;
        outline: none;
        padding-left: 0.3rem;
    }
</style>