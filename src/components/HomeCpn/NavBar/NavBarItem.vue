<template>
    <div class="navBarItem" @click="itemClick">
        <div class="navBarItem-icon">
            <slot name="nav-icon"></slot>
        </div>
        <div class="navBarItem-text">
            <slot name="nav-text"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "NavBarItem",
        props: {
            to: String,
        },
        methods: {
            itemClick() {
                this.$router.push(this.to);
            },
        },
    };
</script>
<style lang="scss" scoped>
    .navBarItem {
        flex: 1;
        margin: 7px 0;
        .navBarItem-icon img {
            width: 51px;
            height: 51px;
        }
        .navBarItem-text {
            font-size: 14px;
        }
    }
</style>
