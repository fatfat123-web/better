<template>
    <canvas ref="myCanvas" id="myCanvas" width="500" height="500" style="border:1px solid #c3c3c3;">1111</canvas>
</template>

<script>
    import tool from '../tool'
    export default {
        name: "tool",
        data() {
            return {
                myCanvas: null,
                canvas: null,
                ctx: null,
                x:null,
                y:null,
                radius:null,
            }
        },
        mounted() {
            this.canvas = this.$refs.myCanvas
            this.ctx = this.canvas.getContext('2d')

            tool.captureMouse(this.canvas, this.mousedown, this.mousemove, this.mouseup); // 自己写对应的传参参数
        },
        methods: {

            mousedown(event) {
                console.log(event.point.x, event.point.y);
                console.log(this);
                onload = function () {
                    document.querySelector('.pointX').innerHTML = event.point.x;
                }
                onload = function () {
                    document.querySelector('.pointY').innerHTML = event.point.y;
                }
            },

            mousemove(event) {
                console.log(event.point);
                onload = function () {
                    document.querySelector('.pointX1').innerHTML = event.point.x;
                }
                onload = function () {
                    document.querySelector('.pointY1').innerHTML = event.point.y;
                }
                this.x = event.point.x;
                this.y = event.point.y;
                this.radius = 5;
                /*清除整个canvas画布*/
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.fillStyle = 'red';
                this.ctx.beginPath();
                /*绘制一个跟随鼠标的圆*/
                this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
                this.ctx.fill();
                this.ctx.closePath();
            },

            mouseup(event) {
                console.log(event.point);
                onload = function () {
                    document.querySelector('.pointX2').innerHTML = event.point.x;
                }
                onload = function () {
                    document.querySelector('.pointY2').innerHTML = event.point.y;
                }
            },


        },


    }
</script>

<style scoped>

</style>
