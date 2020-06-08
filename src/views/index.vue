<template>
    <div class="wrapper" ref="slide">
        <ul class="content">
            <li>
            <div>第一屏啊</div>
                <button @click="aa">123</button>
            </li>
            <li>第二屏</li>
            <li>第三屏</li>
        </ul>
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import Slide from '@better-scroll/slide'

    BScroll.use(Slide)

    export default {
        name: "index",
        data() {
            return {
                scroll: true,
            }
        },
        methods: {
            aa(){
                console.log(this.scroll)
            },
        },
        mounted() {
            new BScroll('.wrapper', {
                scrollX: false,
                scrollY: true,
                slide: {
                    threshold: 100
                },
                useTransition: true,
                momentum: false,
                bounce: false,
                stopPropagation: true
            })

            /*new BScroll('.wrapper', {

                snap: {  // 滑块切换的一些配置

                    speed: 800,  // 滑动切换的速度
                    easing: {
                        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',

                    },
                    click: true,  // 元素可触发点击事件
                    stepY: window.innerHeight,// 纵向切换距离为窗口高度

                    threshold: 0.4,  // 滑动切换到超过一半时切换到下一屏


                }
            });*/
        }
    }
</script>

<style scoped>
    .wrapper {
        background: salmon;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        overflow: hidden;
    }

    .content {
        margin: 0;
        padding: 0;
    }

    .content li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        list-style: none;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
    }

    .content li:nth-child(1) {
        background: #f00;
    }

    .content li:nth-child(2) {
        background: #0f0;
    }

    .content li:nth-child(3) {
        background: #00f;
    }

</style>
