<template>
    <div class="details">
        <div class="delHeader">
            <img class="headerfh" src="@/assets/image/back.png" alt="" />
            <img
                class="headertp"
                src="@/assets/image/hot-list-img1.jpg"
                alt=""
            />
            <p class="text">大连圣亚海洋世界(AAAA景区)</p>
        </div>
        <div class="delBanner">
            <div class="ban-top">
                <div class="ban-l">
                    <p class="l-pf">4.9分<span>很棒</span></p>
                    <p class="l-pl">102441条评论<span>18条攻略</span></p>
                    <span class="l-dw">></span>
                </div>
                <div class="ban-l ban-r">
                    <p class="l-pf r-pf">景点简介</p>
                    <p class="l-pl">开放时间、贴士</p>
                    <span class="l-dw">></span>
                </div>
            </div>
            <div class="ban-for">
                <i class="iconfont">&#xe63e;</i>
                <p>北京市朝阳区金蝉西路东四环小武基北路(四方桥东南)</p>
                <span class="ban-for-tb">></span>
            </div>
        </div>
        <div class="delfk">
            <div class="fkText">
                <i class="iconfont">&#xe602;</i>
                <span
                    >疫情出行必读1、根据疫情防控要求，严格落实“限量、预约、错峰”相关举措</span
                >
                <span class="fk-tb">></span>
            </div>
        </div>

        <div class="tuijian select">
            <h3>去哪儿推荐</h3>
            <ul>
                <li v-for="(item, index) in 3" :key="index">
                    <div class="li-lf">
                        <p class="bzp">北京环球影城指定单日门票-标准票</p>
                        <p class="payMing">
                            <img src="@/assets/image/clock.png" alt="" />
                            <span>可订明日</span>
                        </p>
                        <p class="serve">
                            <span>
                                <img
                                    src="@/assets/image/maolv.png"
                                    alt=""
                                />自营
                            </span>
                            <span>条件退</span>
                            <span>无需换票</span>
                        </p>
                    </div>
                    <div class="money li-rg">
                        <p class="price">¥<em>638</em></p>
                        <p class="goToPay">立即预定</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="oneDay select">
            <h3>1日门票+优速通+服务管家</h3>
            <ul>
                <li v-for="(item, index) in 3" :key="index">
                    <div class="li-lf">成人票</div>
                    <div class="money li-rg">
                        <p class="price">¥<em>1499</em>起</p>
                        <p class="goToPay">查看</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    //  <title-detail title_max="景点项目"></title-detail>
    import TitleDetail from "./components/TitleDetail.vue";
    export default {
        name: "DetailsView",
        components: {
            TitleDetail,
        },
        data() {
            return {
                detailList: {},
            };
        },
    };
</script>
<style lang="scss" scoped>
    .delHeader {
        width: 100%;
        overflow: hidden;
        position: relative;
        font-family: "Arial," Microsoft Yahei "," Helvetica Neue
            ",Helvetica,sans-serif";
    }

    .headerfh {
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.3);
    }

    .headertp {
        width: 100%;
        height: 5rem;
    }

    .delHeader .text {
        position: absolute;
        bottom: 0.2rem;
        left: 0.2rem;
        color: #fff;
        font-size: 0.36rem;
    }

    .delBanner {
        position: relative;
        overflow: hidden;
        margin-bottom: 0.1rem;
        background: #fff;
        border-radius: 0.1rem 0.1rem 0 0;
    }

    .ban-top {
        margin: 0.1rem 0.2rem 0 0.2rem;
        display: flex;
    }

    .ban-l {
        width: 50%;
        position: relative;
    }

    .l-pf {
        font-size: 0.44rem;
        color: #ff8300;
        line-height: 0.44rem;
    }

    .l-pf span {
        font-size: 0.28rem;
        margin-left: 0.2rem;
    }

    .l-pl {
        font-size: 0.24rem;
        color: #9e9e9e;
        line-height: 0.32rem;
        margin-right: 0.2rem;
    }

    .l-dw {
        position: absolute;
        top: 0.2rem;
        right: 0.1rem;
        color: #9e9e9e;
    }

    .r-pf {
        font-size: 0.28rem;
        color: #212121;
    }

    .ban-r p {
        margin-left: 0.2rem;
    }

    .ban-for {
        margin: 0.1rem 0.2rem;
        display: flex;
        height: 0.74rem;
        align-items: center;
    }

    .ban-for p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 0.74rem;
    }

    .ban-for-tb {
        color: #9e9e9e;
    }

    .delfk {
        background-color: #fff5e5;
        color: #ff8300;
        height: 0.88rem;
        line-height: 0.88rem;
        margin: 0.2rem 0.1rem;
        position: relative;
    }

    .fkText {
        padding-right: 0.6rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
    }

    .fk-tb {
        position: absolute;
        top: 0.02rem;
        color: #9e9e9e;
        right: 0.3rem;
    }

    .select {
        margin: 0.2rem 0;
        background-color: #fff;

        h3 {
            padding: 0.2rem;
            font-size: 20px;
        }

        ul {
            margin: 0.2rem;
            padding: 0.4rem 0.2rem;
            border-radius: 0.1rem;
            background-color: #f8f8f8;

            li {
                padding: 0.2rem 0;
                display: flex;
                justify-content: space-between;
                border-bottom: 0.04rem solid #eee;

                .bzp {
                    color: #333;
                    font-size: 0.28rem;
                    line-height: 0.4rem;
                }

                .payMing {
                    padding-top: 0.08rem;
                    display: flex;
                    align-items: center;
                    height: 0.32rem;
                    color: #00afc7;
                    font-size: 0.24rem;
                    line-height: 0.32rem;
                    white-space: nowrap;

                    img {
                        width: 0.2rem;
                        max-height: 0.32rem;
                        margin-right: 0.04rem;
                    }
                }

                .serve {
                    display: flex;
                    padding-top: 0.08rem;

                    span {
                        margin-top: 0.08rem;
                        padding: 0 0.04rem;
                        height: 0.28rem;
                        color: #00afc7;
                        font-size: 0.2rem;
                        line-height: 0.28rem;
                        white-space: nowrap;
                        margin-right: 0.1rem;
                        border: 1px solid #a5e4ec;
                        border-radius: 0.08rem;

                        img {
                            width: 0.2rem;
                            max-height: 0.32rem;
                            margin-right: 0.04rem;
                        }
                    }
                }

                .money {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .price {
                        color: #ff8300;
                        overflow: hidden;
                        height: 0.4rem;
                        font-size: 0.24rem;
                        line-height: 0.28rem;
                        text-align: center;

                        em {
                            margin-left: 0.04rem;
                            font-size: 0.4rem;
                            line-height: 0.4rem;
                            font-style: normal;
                            font-weight: bolder;
                        }
                    }

                    .goToPay {
                        width: 100%;
                        height: 0.52rem;
                        margin-top: 0.12rem;
                        color: #fff;
                        font-size: 0.24rem;
                        line-height: 0.52rem;
                        border-radius: 0.3rem;
                        padding: 0 0.2rem;
                        text-align: center;
                        background-image: linear-gradient(
                            145deg,
                            #ffab1e 0,
                            #ff8c12 100%
                        );
                    }
                }
            }
        }
    }

    .oneDay .li-lf {
        display: flex;
        align-items: center;
    }
</style>
