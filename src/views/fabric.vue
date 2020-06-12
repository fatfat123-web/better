<template>
    <div>

        <canvas id="main"  ref="cvs" style="border:1px solid #c3c3c3;">
            <img src="../assets/images/1.jpg" id="img" style="width:50%;height: auto;"> </canvas>

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
        methods: {
            initialize(){
                const _this = this;
                //设置舞台
                this.canvas = new fabric.Canvas("main", {
                    width:window.innerWidth,
                    height:window.innerHeight,
                    backgroundColor: "rgb(100,100,200)",
                });

                //获取id
                this.imgElement = document.getElementById('img');
                console.log(this.imgElement)

                this.imgInstance = new fabric.Image(this.imgElement, {  //设置图片的样式
                    left: 50,
                    top: 50,
                    scaleX: 0.5,
                    scaleY: 0.5,
                    // width: this.imgElement.style.width,
                    // height: '50%',
                    // height: window.innerHeight,
                    angle: 0,//设置图形顺时针旋转角度
                });

                fabric.Image.fromURL('../assets/images/1.jpg', (oImg) =>  {
                    oImg.scale(0.1);//图片缩小10倍
                    this.canvas.add(oImg);
                    console.log(oImg)
                });


                console.log(new fabric.Image)
                console.log(this.imgElement.style.height)
                this.canvas.add(this.imgInstance);

            },

        },
        mounted() {
            this.initialize()

        }
    }
</script>

<style scoped>
.main{


}
</style>