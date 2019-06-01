import {cityList,cityGetLocation} from "@api/city";
export  default  {
    async actionCityList({commit}){
        let data = await cityList();

        commit("mutationsCityList",data.data.cities)
    },
    async actioncityGetLocation({commit}){
        let data = await cityGetLocation();

       console.log(data.data);
       commit("mutationsCityGetLocation",data.data)
    },

}