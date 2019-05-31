import {
    moviePaying,
    movieComing,
    movieDetails,
    movieCinema,
    movieSearch
} from "@api/movie";

export  default {
    //正在热映
    async actionsMoviePaying({commit}){
        let data = await moviePaying();
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

    }

}