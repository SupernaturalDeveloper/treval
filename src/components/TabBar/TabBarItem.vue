<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "TabBarItem",
        data() {
            return {
                // isActive:true
            };
        },
        computed: {
            isActive() {
                return this.$route.path.includes(this.to);
            },
            activeStyle() {
                return this.isActive ? this.ActiveXStyle : {};
            },
        },
        props: {
            to: String,
            ActiveXStyle: {
                type: Object,
                default() {
                    return {
                        color: "red",
                        fontSize: "14px",
                    };
                },
            },
        },
        methods: {
            itemClick() {
                this.$router.push(this.to);
            },
        },
    };
</script>
<style lang="scss" scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        img {
            width: 24px;
            height: 24px;
            margin-top: 3px;
            vertical-align: middle;
        }
    }
</style>
