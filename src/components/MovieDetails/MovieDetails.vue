<template>
   <div id="detailpage">
       <Header :title="moveDetail.nm">
           <template v-slot>
               <v-touch @tap="handleBack()" tag="p">&lt;</v-touch>
           </template>
       </Header>
       <div id="content">
           <div class="detail_body">
               <div class="detail_movie_bg" :style="{'background-image':'url('+(moveDetail.img?moveDetail.img.replace(/w\.h/,'71.100'):'')+')'}"></div>
               <div class="detail_movie_content">
                   <div class="detail_movie_content_bg">
                       <img :src="moveDetail.img|toImg('128.180')"/>
                   </div>
                   <div class="detail_movie_content_info">
                       <h2>{{moveDetail.nm}}</h2>
                       <p>{{moveDetail.enm}}</p>
                       <p>{{moveDetail.sc}}</p>
                       <p>{{moveDetail.cat}}</p>
                       <p>{{moveDetail.oriLang}}</p>
                       <p>{{moveDetail.pubDesc}}</p>
                   </div>
               </div>
           </div>
           <div class="detail_info">
               <p>{{moveDetail.dra}}</p>
           </div>
           <div class="detail_movie_performer">
               <BScroll>
                   <ul>
                       <li v-for="data in moveDetail.photos">
                         <img :src="data | toImg('128.180')">
                       </li>

                   </ul>
               </BScroll>
           </div>
       </div>
   </div>
</template>

<script>
    import Header from "@common/header/Header"
    import Vuex from "vuex"
    export default {
        name: "MovieDetails",
        props:["movieId"],
        components:{
            Header
        },
        activated(){
            this.movieDetails(this.movieId)
        },
        methods:{
            ...Vuex.mapActions({
                movieDetails:"movie/actionsMovieDetails"
            }),
            handleBack(){
                this.$router.back();
            }
        },
        computed:{
            ...Vuex.mapState({
                moveDetail:state=>state.movie.moveDetail
            })
        }
    }
</script>

<style scoped>
    /*content*/
    #content{
        position: absolute;
        width: 100%;
        height: 100%;
        padding-top:1rem;
        padding-bottom: 1rem;
    }


    /*detail_body*/

    .detail_body{
        position: relative;
        height: 4rem;
        width: 100%;
        overflow: hidden;
    }
    .detail_body .detail_movie_bg{
        width: 100%;
        height: 100%;

        background-size:100% 100%;
        /*图片模糊度*/
        filter: blur(30px);
        position: absolute;
        left: 0;
        top:0;
        z-index:1;
    }
    .detail_body .detail_movie_content{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index:2;
        left:0;
        top:0;
        display: flex;

        align-items: center;
    }
    .detail_body .detail_movie_content .detail_movie_content_bg{
        width: 2rem;
        height: 3rem;
        margin:.4rem;
        flex-shrink: 0;

    }
    .detail_body .detail_movie_content .detail_movie_content_bg>img{
        width: 100%;
        height: 100%;
        border:4px solid #ccc;
    }
    .detail_body .detail_movie_content .detail_movie_content_info{
        color:#fff;
    }
    .detail_body .detail_movie_content .detail_movie_content_info h2{
        font-size:.4rem;
        font-style:normal;
        line-height: .8rem;
    }
    .detail_body .detail_movie_content .detail_movie_content_info p{
        font-size: .26rem;
        line-height: .46rem;
        color: #ccc;
    }

    #content .detail_info{
        padding: .1rem;
        font-size:.3rem;
    }
    #content .detail_movie_performer{
        position: relative;
        width: 100%;
        margin:.4rem;
    }
    #content .detail_movie_performer ul{
        display: flex;
        width: max-content;
    }
    #content .detail_movie_performer ul li{
        margin-right: .4rem;
        text-align: center;
        flex-shrink: 0;
        width: 1.3rem;
        height: 1.8rem;

    }

    #content .detail_movie_performer ul li{
        margin-bottom: .1rem;
    }
    #content .detail_movie_performer ul li img{
        width:100%;
        height: 100%;
    }
</style>