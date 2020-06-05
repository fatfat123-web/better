<template>
    <div class="recommend">
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <div>1234</div>
                <div>12345</div>
                <div>123456</div>
                <div>1234</div>
            </div>

        </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "test",
        data() {
            return {
                scroll: true,


            }

        },
        methods: {

        },
        mounted() {
            new BScroll('.wrapper', {
                    snap: {  // 滑块切换的一些配置

                        speed: 800,  // 滑动切换的速度
                        easing: {
                            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',

                        },
                        click: true,  // 元素可触发点击事件
                        stepY: window.innerHeight,// 纵向切换距离为窗口高度

                        threshold: 0.4,  // 滑动切换到超过一半时切换到下一屏


                    }
                }
            );
        },
    }
</script>

<style scoped lang="scss">
    .recommend {
        flex: 1;
        overflow: hidden;

        .wrapper {
            background: salmon;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            overflow: hidden;

            .content {
                background: violet;
                height: 100vh;

                div:nth-child(odd) {
                    color: blue;

                }
            }
        }
    }
</style>