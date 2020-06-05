<template>
    <div class="recommend">
<div class="wrapper" ref="warpper">
<div class="content"></div>

</div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "test",
        data(){
          return{

          }

        },
        methods:{
            initBs(){
             let wrapper =this.$refs.wrapper
                new BScroll(wrapper,{

                }
                )
            }
        },
        mounted() {
            this.initBs()
        },
    }
</script>

<style scoped lang="scss">
.recommend{
    flex: 1;
    overflow: hidden;
    .wrapper{
    height: 100%;
        .content{
            .w(375)
        }
    }
}
</style>