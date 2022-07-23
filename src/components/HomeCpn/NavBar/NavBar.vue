<template>
    <div id="navBar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "navBar",
    };
</script>

<style lang="scss" scoped>
    #navBar {
        display: flex;
        text-align: center;
    }
</style>