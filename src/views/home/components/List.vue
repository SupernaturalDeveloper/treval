<template>
    <div class="ListBlock">
        <div class="listTop">猜你喜欢</div>
        <div class="list-box">
            <div class="list" v-for="item in weekendList" :key="item.id">
                <img
                    class="list-img laz"
                    :data-src="item.imgUrl"
                    alt="图片加载失败"
                />
                <div class="list-right">
                    <div class="title">{{ item.title }}</div>
                    <div class="center">
                        <div>⭐⭐⭐⭐⭐⭐</div>
                        <div>33789条评论</div>
                    </div>
                    <div class="footer">
                        <div>￥613起</div>
                        <div>通州区</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: ["weekendList"],
        mounted() {},
    };
</script>

<style lang="scss" scoped>
    .ListBlock {
        background-color: #fff;
    }
    .listTop {
        height: 0.94rem;
        line-height: 0.94rem;
        padding-left: 0.1rem;
        margin-left: 0.5rem;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin-left: -0.3rem;
            left: 0;
            width: 0.3rem;
            height: 0.3rem;
            background: url(https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png);
            background-size: 100%;
        }
    }
    .list {
        display: flex;
        padding-left: 0.24rem;
        margin-bottom: 0.5rem;
        .list-img {
            width: 2rem;
            height: 2rem;
        }
        .list-right {
            flex: 1;
            padding: 0 0.22rem;
            .title {
                margin-top: 0.26rem;
            }
            .center {
                display: flex;
                margin-top: 0.14rem;
                div {
                    margin-right: 0.1rem;
                }
            }
            .footer {
                display: flex;
                justify-content: space-between;
                margin-top: 0.22rem;
            }
        }
    }
</style>
