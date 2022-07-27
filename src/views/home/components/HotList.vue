<template>
    <div class="HotList">
        <div class="HotList-top">
            <div class="hot">本周热门榜单</div>
            <div class="qbbd">全部榜单</div>
        </div>
        <div class="HotList-bottom">
            <ul>
                <li
                    @click="toDetail(index)"
                    v-for="(item, index) in recommendList"
                    :key="item.id"
                >
                    <img class="laz" :data-src="item.imgUrl" alt="" />
                    <p>{{ item.title }}</p>
                    <div>￥613.0起</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HotList",
        props: ["recommendList"],
        mounted() {},
        methods: {
            toDetail(index) {
                this.$router.push({ name: "detail", params: { id: index } });
            },
        },
    };
</script>

<style lang="scss" scoped>
    .HotList {
        background-color: #fff;
        margin: 0.2rem 0;
    }
    .HotList-top {
        height: 0.94rem;
        padding: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hot,
        .qbbd {
            position: relative;
            padding: 0 0.4rem;
        }
        .hot::after {
            content: "";
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            background: url(https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png);
            background-size: 100%;
        }
    }
    .HotList-bottom {
        overflow-x: scroll;
        padding: 0 0.24rem;
        ul {
            display: flex;
            li {
                margin-right: 0.12rem;
                img {
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
    }
</style>
