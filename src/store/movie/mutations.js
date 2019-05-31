export  default {
    mutationsMoviePaying(state,params){
        state.movieNowList = params;
    },
    mutationsMovieComing(state,params){
        state.movieComing = params
    },
    mutationsMovieSearch(state,params){
        state.movieSearchList = params;
    }
}