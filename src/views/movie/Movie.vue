<template>
    <div class="moviePage">
        <Header title="猫眼电影"></Header>
        <div id="content">
            <div class="movie_menu">
                <div class="movie_menu_city">
                    <span>北京</span>
                    <i class="iconfont">&#xe627;</i>
                </div>
                <ul class="movie_menu_switch">
                    <li class="movie_menu_active">正在热映</li>
                    <li>即将上映</li>
                </ul>
                <div class="movie_meun_search">
                    <i class="iconfont">&#xe613;</i>
                </div>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from "@common/header/Header"
    export default {
        name: "Movie",
        components:{
            Header
        }
    }
</script>

<style scoped>
    #content{
        position: absolute;
        width: 100%;
        height: 100%;
        padding-top:1rem;
        padding-bottom: 1rem;
    }

    #content .movie_menu{
        width: 100%;
        height: .9rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .4rem;
        border: 1px solid #e6e6e6;
    }
    #content .movie_menu .movie_menu_city span{
        font-size: .3rem;
    }

    #content .movie_menu .movie_menu_city i{
        font-size: .3rem;
    }
    #content .movie_menu .movie_meun_search i{
        font-size: .4rem;
        font-weight: 900;
        color: #e54847;
    }
    #content .movie_menu .movie_menu_switch{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #content .movie_menu .movie_menu_switch li{
        height: 100%;
        line-height: .9rem;
        padding: 0 .2rem;
        font-size: .3rem;
    }

    #content .movie_menu .movie_menu_switch .movie_menu_active{
        color: #ef4238;
        border-bottom:2px #ef4238 solid
    }

</style>