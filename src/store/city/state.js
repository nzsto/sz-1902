export  default  {
    cityList: JSON.parse( window.sessionStorage.getItem("cityList"))|| [],
    cityHot:  JSON.parse(window.sessionStorage.getItem("cityHot")) || [],
    cityId:   window.sessionStorage.getItem("cityId") || 10,
    nm: window.sessionStorage.getItem("nm") || "北京",
    cityLoading:true,
    getLocation:JSON.parse(window.sessionStorage.getItem("getLocation")) || {},
}