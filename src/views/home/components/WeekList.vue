<template>
    <div class="weekList">
        <div class="itemTop">周末去哪儿</div>
        <div class="item-box">
            <div class="item" v-for="item in weekendList" :key="item.id">
                <img class="laz" :data-src="item.imgUrl" alt="图片加载失败" />
                <div class="item-text">
                    <p>{{ item.title }}</p>
                    <p>{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeekList",
        props: ["weekendList"],
    };
</script>

<style lang="scss" scoped>
    .weekList {
        background-color: #fff;
    }

    .itemTop {
        padding-left: 0.26rem;
        line-height: 0.8rem;
        background: #f5f5f5;
    }
    .item {
        img {
            width: 100%;
            height: 2.74rem;
        }
        .item-text {
            padding: 0.14rem 0.2rem 0.2rem 0.2rem;
            p {
                font-size: 0.28rem;
                line-height: 0.48rem;
            }
        }
    }
</style>