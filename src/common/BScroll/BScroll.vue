<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    export default {
        name: "BScroll",
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:1,
                scrollX:true
                // pullUpLoad:true
            });

        },
        methods:{
            handleScrollTo(y){
                this.scroll.scrollTo(0,y,300)
            },
            handleScrollPullUp(cb){
                this.scroll.on("scroll",(pro)=>{
                    console.log(pro.y)
                    if(pro.y>20){
                        cb();
                    }

                })
            },
            handleScrollPullDown(cb) {
                this.scroll.on("touchEnd",()=>{
                  cb();
                })
            }
        }
    }
</script>

<style scoped>
.wrapper{
    height: 100%;
}
</style>