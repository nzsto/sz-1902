export  default  {
    mutationsCityList(state,params){
        //热门城市
        let cityHot = [];
        //城市列表
        let cityList = [];

        /*
            城市列表
            [
                {index:A,list:[{cityId:10,nm:北京}]}
            ]

        * */

        for(var i=0;i<params.length;i++){
            let firstLetter = params[i].py.slice(0,1).toUpperCase();
            if(isCity(firstLetter)){
                for(var j=0;j<cityList.length;j++){
                    if(cityList[j].index == firstLetter){
                        cityList[j].list.push({cityId:params[i].id,nm:params[i].nm});
                        break;
                    }
                }
            }else{
                cityList.push({index:firstLetter,list:[{cityId:params[i].id,nm:params[i].nm}]})
            }
        }

        //封装一个方法用来查看当前index是否存在cityList中
        function isCity(firstLetter){
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index == firstLetter){
                    return true;
                }
            }

            return false;
        }


        //打印
       cityList.sort((a,b)=>{
           if(a.index>b.index){
               return 1;
           }else{
               return -1;
           }
       })


        //热门城市
        for(var i=0;i<params.length;i++){
            if(params[i].isHot){
                cityHot.push({cityId:params[i].id,nm:params[i].nm});
            }
        }

        //更改state中的数据
        state.cityList = cityList;
        state.cityHot = cityHot;

        window.sessionStorage.setItem("cityList",JSON.stringify(cityList));
        window.sessionStorage.setItem("cityHot",JSON.stringify(cityHot));
        state.cityLoading = false;

    },
    mutationsCityToggle(state,params){
        state.cityId = params.cityId;
        state.nm = params.nm;
        window.sessionStorage.setItem("nm",params.nm);
        window.sessionStorage.setItem("cityId",params.cityId)
    },
    //城市定位
    mutationsCityGetLocation(state,params){
        state.getLocation = params;

        window.sessionStorage.setItem("getLocation",JSON.stringify(params))

    },
    MessageBoxConfirm(state){
        state.nm = state.getLocation.nm;
        state.cityId = state.getLocation.id;
    }
}