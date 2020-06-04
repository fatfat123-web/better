<template>
    <div class="wrapper">
        <ul class="content">
            <li>第一屏</li>
            <li>第二屏</li>
            <li>第三屏</li>
        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "index",
        data() {
            return {
                scroll: true,




            }
        },
        methods: {},
        mounted() {

            new BScroll('.wrapper', {
                       click: true,
                snap: {  // 滑块切换的一些配置

                    threshold: 0.3,  // 滑动切换到超过一半时切换到下一屏
                    stepY: window.innerHeight  // 纵向切换距离为窗口高度
                }
            });

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
        font-size: 50px;
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
    .triangle {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #f60;
        position: absolute;
        top: -10px;
        left: 50%;
        margin-left: -10px;
    }
    .triangle:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #000;
        position: absolute;
        margin-left: -10px;
        z-index: -1;
        filter: blur(2px);
    }
</style>