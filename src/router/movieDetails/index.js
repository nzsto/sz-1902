export  default {
    path:"/movieDetails/:movieId",
    name:"details",
    component:()=>import("@components/MovieDetails/MovieDetails"),
    meta:{
        TabBarFlag:false
    },
    props:true
}