import {
    moviePaying,
    movieComing,
    movieDetails,
    movieCinema,
    movieSearch
} from "@api/movie";

export  default {
    //正在热映
    async actionsMoviePaying({commit},params){
        let data = await moviePaying(params);
        commit("mutationsMoviePaying",data.data.movieList)
    },
    //即将上映
    async actionsMovieComing({commit}){
        let data = await movieComing();
        console.log(data.data.comingList);
        commit("mutationsMovieComing",data.data.comingList)
    },
    //电影搜索
    async actionsMovieSearch({commit},params){
        let data = await movieSearch(params);

        commit("mutationsMovieSearch",data.data.movies?data.data.movies.list:[])
    },
    //影院
    async actionsMovieCinema({commit},params){
        let data = await movieCinema(params);
        console.log(data.data.cinemas);
        commit("mutationsMovieCinema",data.data.cinemas)

    },
    //详情

    async actionsMovieDetails({commit},params){
        let data = await movieDetails(params);

        console.log(data.data.detailMovie);
        commit("mutationsMovieDetails",data.data.detailMovie)
    },

}