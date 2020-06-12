<template>
    <div>

        <canvas id="main"  ref="cvs" style="border:1px solid #c3c3c3;">
            <img src="../assets/images/1.jpg" id="img1"> </canvas>

    </div>
</template>

<script>
    import {fabric} from 'fabric'

    export default {
        name: "fabric",
        data() {

            return {

                imgInstance: null,
                imgElement: null,
                canvas: null,
            }
        },
        methods: {},
        mounted() {
            const _this = this;
            this.canvas = new fabric.Canvas("main", {

                width:window.innerWidth,
                height:window.innerHeight,

                backgroundColor: "rgb(100,100,200)",

            });

            fabric.Image.fromURL('../assets/images/1.jpg', function (oImg) {
                oImg.scale(0.1);//图片缩小10倍
                _this.canvas.add(oImg);
            });
            this.imgElement = document.getElementById('img1');
            this.imgInstance = new fabric.Image(this.imgElement, {  //设置图片位置和样子
                left: 100,
                top: 100,
                width: 200,
                height: 100,
                angle: 30//设置图形顺时针旋转角度
            });
            this.canvas.add(this.imgInstance);
        }
    }
</script>

<style scoped>
.main{


}
</style>