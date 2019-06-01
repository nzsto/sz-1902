export  default {
    mutationsMoviePaying(state,params){
        state.movieNowList = params;
        window.sessionStorage.setItem("movieNowList",JSON.stringify(params));
        state.movieNowLoading = false;
    },
    mutationsMovieComing(state,params){
        state.movieComing = params
        window.sessionStorage.setItem("movieComing",JSON.stringify(params));
        state.movieComingLoading = false;
    },
    mutationsMovieSearch(state,params){
        state.movieSearchList = params;
    },
    mutationsMovieCinema(state,params){
        state.movieCinemas = params;
        window.sessionStorage.setItem("movieCinemas",JSON.stringify(params));
        state.movieCinemaLoading = false;
    },
    mutationsMovieDetails(state,params){
        state.moveDetail = params
    }
}