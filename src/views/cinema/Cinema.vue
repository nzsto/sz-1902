<template>
    <div class="cinemaPage">
        <Header title="影院"></Header>
        <div id="cinema_content">
            <div class="cinema_nav">
                <ul>
                    <li>
                        <span>全城</span>
                        <i class="iconfont">&#xe627;</i>
                    </li>
                    <li>
                        <span>全城</span>
                        <i class="iconfont">&#xe627;</i>
                    </li>
                    <li>
                        <span>全城</span>
                        <i class="iconfont">&#xe627;</i>
                    </li>
                </ul>
            </div>
        </div>
        <CinemaList/>
    </div>
</template>

<script>
    import Header from "@common/header/Header"
    import CinemaList from "@components/cinemaList/CinemaList"
    export default {
        name: "Cinema",
        components:{
            Header,
            CinemaList
        }
    }
</script>

<style scoped>
    .cinemaPage{
        height: 100%;
        position: relative;

    }
    #cinema_content{
        position: absolute;
        width: 100%;
        height: 100%;
        padding-top:1rem;
    }
    #cinema_content .cinema_nav{
        width: 100%;
        position: fixed;
        height: .92rem;
        border-bottom: 1px solid #ccc;
        z-index: 2;
        background: #fff;
    }
    #cinema_content .cinema_nav ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    #cinema_content .cinema_nav ul li{
        width: 100%;
        text-align: center;
        font-size:.3rem;
    }
</style>