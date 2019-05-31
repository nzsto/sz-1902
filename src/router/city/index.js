export  default  {
    path:"/city",
    name:"city",
    component:()=>import("@components/cityList/CityList"),
    meta:{
        TabBarFlag:false
    }
}