<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "App",
        data() {
            return {};
        },
        created() {
            console.log();
        },
        mounted() {},
    };
</script>
<style lang="scss">
    @import "@/assets/css/base.css";

    #app {
        background-color: rgb(245, 245, 245);
    }
</style>