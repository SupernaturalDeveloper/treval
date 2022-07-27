<template>
    <div class="title">
        <h3 v-if="title_max">
            {{ title_max }}
        </h3>
        <p v-if="title_min">
            {{ title_min }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "TitleDetail",
        props: {
            title_max: String,
            title_min: String,
        },
        data() {
            return {};
        },

        mounted() {},

        methods: {},
    };
</script>

<style lang="scss" scoped>
    .title {
        h3 {
            overflow: hidden;
            position: relative;
            z-index: 4;
            background: #fff;
            color: #212121;
            font-size: 0.48rem;
            line-height: 0.56rem;
            font-weight: bold;
            padding: 0.32rem 0 0 0.04rem;
        }
        p {
            font-size: 0.4rem;
            line-height: 0.44rem;
            font-weight: bold;
            color: #212121;
            align-items: baseline;
            padding-top: 0.28rem;
        }
        p::before {
            content: "";
            display: inline-block;
            background-image: linear-gradient(126deg, #00e0ca 0, #00bfd4 100%);
            border-radius: 0.06rem;
            height: 0.24rem;
            min-width: 0.08rem;
            margin-right: 0.12rem;
        }
    }
</style>