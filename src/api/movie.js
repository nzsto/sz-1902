import {http} from "@utils/http";
//接口的管理

//正在热映
export const moviePaying = (id)=>http("get","/api/movieOnInfoList",{cityId:id});

//即将上映
export const movieComing = ()=>http("get","/api/movieComingList",{cityId:10});

//电影详情
export const movieDetails = (id)=>http("get","/api/detailmovie",{movieId:id});

//影院
export const movieCinema = (id)=>http("get","/api/cinemaList",{cityId:id});

//搜索
export const movieSearch = (val)=>http("get","/api/searchList",{cityId:10,kw:val});