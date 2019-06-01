<template>

    <BScroll ref="movieBody">
        <div class="movie_body">
            <Loading v-if="movieNowLoading"></Loading>
            <p v-if="pullUpFlag" class="movie_info">{{pullUpInfo}}</p>
            <v-touch class="movie_item" v-for="(item,index) in movieNowList" tag="div" @tap="handleDetails(item.id)">
                <div class="movie_item_pic">
                    <img :src="item.img | toImg('128.180')">
                </div>
                <div class="movie_item_info">
                    <h2>{{item.nm}}</h2>
                    <p>观众评:<span class="grade">{{item.sc}}</span></p>
                    <p>主演：<span>{{item.star}}</span></p>
                    <p><span>{{item.showInfo}}</span></p>
                </div>
                <div :class="item.globalReleased? 'movie_item_btn asale' : 'movie_item_btn ticket'">{{item.globalReleased?'购票':'预售'}}</div>
            </v-touch>
        </div>
    </BScroll>
</template>

<script>
    import Vuex from "vuex";

    export default {
        name: "MovieNow",
        data(){
            return {
                id:-1,
                pullUpInfo:"正在加载",
                pullUpFlag:false
            }
        },
        activated(){
            if(this.id !=this.cityId){
                this.actionsMoviePaying(this.cityId);
                this.id = this.cityId;
            }
        },
        methods:{
            ...Vuex.mapActions({
                actionsMoviePaying:"movie/actionsMoviePaying"
            }),
            handleDetails(id){


                this.$router.push({name:"details",params:{movieId:id}})
            }
        },
        computed:{
            ...Vuex.mapState({
                movieNowList:state=>state.movie.movieNowList,
                cityId:state=>state.city.cityId,
                movieNowLoading:state=>state.movie.movieNowLoading
            })
        },
        mounted(){
            this.$refs.movieBody.handleScrollPullUp(()=>{
                this.pullUpFlag = true;
                this.pullUpInfo = "正在加载"
            });

            this.$refs.movieBody.handleScrollPullDown(()=>{
                this.pullUpInfo = "加载完毕"
                setTimeout(()=>{
                    this.pullUpFlag = false;
                },1000)
            })
        }

    }
</script>

<style scoped>

    #content .movie_body{
        padding-bottom: 1rem;
        padding-left: .2rem;
        padding-right: .2rem;
        overflow-x:hidden;
    }
    #content .movie_body .movie_info{
        width: 100%;
        text-align: center;
    }
    #content .movie_body .movie_item{
        padding: .2rem 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        background: #fff;
    }
    #content .movie_body .movie_item .movie_item_pic{
        width: 1.28rem;
        height: 1.8rem;
    }
    #content .movie_body .movie_item .movie_item_pic img{
        width: 100%;
        height: 100%;
    }
    #content .movie_body .movie_item .movie_item_info{
        margin-left: .2rem;
        flex: 1;
        height: 100%;
    }
    #content .movie_body .movie_item .movie_item_info h2{
        font-size: .34rem;
        line-height: .5rem;
        width:3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    #content .movie_body .movie_item .movie_item_info p{
        font-size: .26rem;
        line-height: .45rem;
        color: #666;
        width: 4rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }
    #content .movie_body .movie_item .movie_item_info p .grade{
        font-weight: 700;
        color: #faaf00;
        font-size: .3rem;
    }

    #content .movie_body .movie_item  .movie_item_btn{
        width: 1rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        font-size: .26rem;
        cursor: pointer;
    }
    #content .movie_body .movie_item .asale{
        background-color: #f03d37;
    }
    #content .movie_body .movie_item .ticket {
        background-color: #3c9fe6;
    }
</style>