<template>
    <canvas ref="myCanvas" width="500" height="500" style="border:1px solid #c3c3c3;">1111</canvas>
</template>

<script>
    import tool from '../tool'
    export default {
        name: "tool",
        data() {
            return {
                myCanvas: null,
                context: null,
                x:null,
                y:null,
                radius:null,
            }
        },
        mounted() {
            this.canvas = this.$refs.myCanvas
            this.context = this.canvas.getContext('2d')

            tool.captureMouse(canvas, mousedown, mousemove, mouseup); // 自己写对应的传参参数
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
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'red';
                ctx.beginPath();
                /*绘制一个跟随鼠标的圆*/
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
                ctx.fill();
                ctx.closePath();
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
