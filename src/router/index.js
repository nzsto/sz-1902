import Vue from 'vue'
import Router from "vue-router";
import movie from "./movie"
import cinema from "./cinema"
import mine from "./mine"
import city from "./city"
import movieDetail from "./movieDetails"
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path:"/",
      redirect:"/movie/movieNow"
    },
    movie,
    cinema,
    mine,
    city,
    movieDetail
  ]
})
