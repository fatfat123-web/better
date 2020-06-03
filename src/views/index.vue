<template>
    <div class="wrapper" ref="wrapper">
        <ul class="content">
            <li style="background:burlywood ">1</li>
            <li style="background:red ">2</li>
            <li style="background:orangered ">3</li>
            <li style="background:chartreuse ">4</li>
            <li style="background:violet ">5</li>
            <li style="background:cornflowerblue ">6</li>

        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "index",
        data(){
            return{
                scroll: true,
                // background: [
                //     'burlywood', 'red', 'orangered','violet','cornflowerblue',
                // ],
                options:{
                    scrollY: true,
                    snap: {
                        loop: false, // 开启循环播放
                        stepX: 200, // 每页宽度为 200px
                        stepY: 100, // 每页高度为 100px
                        threshold: 0.3, // 滚动距离超过宽度/高度的 30% 时切换图片
                        speed: 400 // 切换动画时长 400ms
                    }
                }

            }
        },
        methods:{
            scrollTo(item){
              console.log(item)

            },

        },
        mounted() {


            let scroll = new BScroll('.wrapper',{
                scrollY: true,
                click: true
            })

            const options = {
                scrollY: true // 因为scrollY默认为true，其实可以省略
            }

            // options.pullDownRefresh = {
            //     threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
            //     stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
            // }

            setTimeout(() => {
                this.scroll = new BScroll(this.$refs.wrapper, options)
            }, 20)
        }
    }
</script>

<style scoped>
    .wrapper{
        background: salmon;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        overflow:hidden;
    }
    .content li{
        height: 100vh;

    }
</style>
