<template>
    <BScroll ref="scroll">
        <div class="city_body" ref="body">
            <loading v-if="cityLoading"/>
            <!--热门城市-->
            <div class="hot_city">
                <div class="hot_title">热门城市</div>
                <div class="hot_city_list">
                    <div class="hot_city_name" v-for="(item,index) in cityHot">{{item.nm}}</div>
                </div>
            </div>
            <!--城市列表-->
            <div class="city_list" ref="city">
                <div class="city_list_item" v-for="(item,index) in cityList">
                    <div class="city_title_letter">{{item.index}}</div>
                    <div class="city_list_name">
                        <v-touch tag="div" class="city_list_name_item"
                             v-for="(data,idx) in item.list"
                             @tap="handleToggleCity(data)"
                        >{{data.nm}}</v-touch>
                    </div>
                </div>
            </div>
        </div>
        <!--城市列表下标-->
        <div class="city_list_index">
            <v-touch
                    tag="div"
                    class="index_item"
                    v-for="(item,index) in cityList"
                    v-on:tap="handleTo(index)"
            >{{item.index}}</v-touch>
        </div>
    </BScroll>
</template>

<script>
    import Vuex from "vuex";
    export default {
        name: "CityList",
        created(){
            this.actionCityList();
        },
        methods:{
            ...Vuex.mapActions({
                actionCityList:"city/actionCityList"
            }),
            ...Vuex.mapMutations({
                mutationsCityToggle:"city/mutationsCityToggle"
            }),
            handleTo(index){
               let letters = this.$refs.city.querySelectorAll(".city_title_letter");
                // letters[index].offsetTop
               this.$refs.scroll.handleScrollTo(-letters[index].offsetTop)
            },
            handleToggleCity(params){
                this.$router.push("/movie");
                this.mutationsCityToggle(params)
            }
        },
        computed:{
            ...Vuex.mapState({
                cityList:state=>state.city.cityList,
                cityHot:state=>state.city.cityHot,
                cityLoading:state=>state.city.cityLoading
            })
        },

    }
</script>

<style scoped>
    .city_body {
        background: #ebebeb;
        overflow-x:hidden ;
    }

    /*热门城市*/
    .hot_title,.city_title_letter{
        line-height: .6rem;
        padding-left: .26rem;
        font-size: .28rem;
    }

    .hot_city_list,.city_list_name {
        width: 96%;
        background: #f5f5f5;
        padding-bottom: 0.16rem;
        padding-right: 0.6rem;
        display: flex;
        flex-wrap: wrap;
    }
    .hot_city_name {
        margin-top: 0.3rem;
        margin-left: 0.26rem;
        width: 1.9rem;
        height: 0.66rem;
        background: #fff;
        text-align: center;
        line-height: 0.66rem;
        font-size: 0.28rem;
        border: 2px solid #e6e6e6;
    }


    .city_list>div{
        width: 100%;
    }
    .city_list_name_item{
        line-height: .9rem;
        margin-left: .26rem;
        width: 100%;
        border-bottom: 2px solid #e6e6e6;
        font-size: .28rem;
    }


    /*城市列表下标*/
    .city_list_index{
        position: fixed;
        right: 0;
        top: 1rem;
    }
    .city_list_index>div{
        padding: .1rem .05rem;
        font-size:.25rem;
    }
</style>