export  default {
    movieNowList:JSON.parse(window.sessionStorage.getItem("movieNowList")) || [],
    movieComing: JSON.parse(window.sessionStorage.getItem("movieComing")) || [],
    movieSearchList:[],
    movieNowLoading:true,
    movieComingLoading:true,
    movieCinemas: JSON.parse(window.sessionStorage.getItem("movieCinemas")) || [],
    movieCinemaLoading:true,
    moveDetail:""
}