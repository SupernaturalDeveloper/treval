<template>
    <div class="cityItem">
        <h2 class="title" :id="keyId">
            <slot name="title"></slot>
        </h2>
        <div class="cityBox">
            <template v-if="Array.isArray(cityList)">
                <div
                    @click="toHome(item.id, item.name)"
                    :style="itemStyle"
                    v-for="item in cityList"
                    :key="item.id"
                >
                    {{ item.name }}
                </div>
            </template>
            <template v-else>
                <div
                    :style="itemStyle"
                    v-for="(item, key) in cityList"
                    :key="item.id"
                >
                    <a :href="'#' + key">{{ key }}</a>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CityItem",
        props: {
            list: [Array, Object],
            styleObj: Object,
            keyId: String,
        },
        data() {
            return {
                cityList: this.list,
            };
        },
        mounted() {
            // console.log(this.list);
        },
        computed: {
            itemStyle() {
                return this.styleObj ? this.styleObj : {};
            },
        },
        methods: {
            toHome(id, name) {
                this.$store.dispatch({
                    type: "changeHomeCityName",
                    params: {
                        id,
                        name,
                    },
                });
                this.$router.push("/");
                // this.$router.replace(`/home?id=${id}&name=${name}`);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .cityItem {
        width: 100%;
        h2 {
            font-size: 0.24rem;
            margin: 0.24rem 0.3rem;
        }

        .cityBox {
            display: flex;
            flex-wrap: wrap;
            background: #fff;
            div {
                text-align: center;
                line-height: 0.9rem;
            }
        }
    }
</style>
