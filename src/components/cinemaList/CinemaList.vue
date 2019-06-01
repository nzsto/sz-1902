<template>
    <BScroll>
        <div class="cinema_body">
            <Loading v-if="movieCinemaLoading"></Loading>
            <div class="cinema_body_detail" v-for="(item,index) in movieCinemas">
                <div class="cinema_body_detail_name">
                    <span>{{item.nm}}</span>
                    <span class="cinema_price">{{item.sellPrice}}元起</span>
                </div>
                <div class="cinema_body_detail_address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="cinema_body_detail_card">
                    <div>小吃卡</div>
                    <div>折扣卡</div>
                </div>
            </div>
        </div>
    </BScroll>
</template>

<script>
    import Vuex from "vuex"
    export default {
        name: "CinemaList",
        data(){
            return {
                id:-1
            }
        },
        activated(){
            if(this.id !=this.cityId){
                this.actionsMovieCinema(this.cityId);
                this.id = this.cityId;
            }

        },
        computed:{
            ...Vuex.mapState({
                cityId:state=>state.city.cityId,
                movieCinemas:state=>state.movie.movieCinemas,
                movieCinemaLoading:state=>state.movie.movieCinemaLoading
            })
        },
        methods:{
            ...Vuex.mapActions({
                actionsMovieCinema:"movie/actionsMovieCinema"
            })
        }
    }
</script>

<style scoped>

    .cinema_body{
        position: absolute;
        top:3.91rem;
        padding-left:.4rem;
        padding-right:.4rem;
        padding-bottom: 1rem;
    }
    .cinema_body .cinema_body_detail{
        /*margin-top: .4rem;*/
        border-bottom:1px solid #ccc;
        background: #fff;

    }
    .cinema_body .cinema_body_detail>div{
        margin-bottom: .2rem;
    }
    .cinema_body .cinema_body_detail .cinema_body_detail_name>span:nth-child(1){
        font-size:.35rem;
    }
    .cinema_body .cinema_body_detail .cinema_body_detail_name>span:nth-child(2){
        font-size:.3rem;
        color:#f03d37;
    }
    .cinema_body .cinema_body_detail .cinema_body_detail_address{
        display: flex;
        justify-content: space-between;
        font-size:.26rem;
        align-items: center;
    }
    .cinema_body .cinema_body_detail .cinema_body_detail_card{
        display: flex;
    }
    .cinema_body .cinema_body_detail .cinema_body_detail_card>div {
        padding: 0 .06rem;
        height: .36rem;
        line-height: .36rem;
        border-radius: 2px;
        color: #f90;
        border: 1px solid #f90;
        font-size: .26rem;
        margin-right: 5px;
    }
</style>