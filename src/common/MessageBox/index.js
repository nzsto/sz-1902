import Vue from "vue";
import MessageBox from "./MessageBox";

export const messageBox = (function () {
    const defaultProps = {
            title:"标题",
            content:"内容",
            toggleCity:"切换城市",
            confirm:"确认",

    }

    let myMessageBox = Vue.extend(MessageBox);

    return (options)=>{
        for(var key in options){
            defaultProps[key] = options[key];
        }

        let vm = new myMessageBox({
            el:document.createElement("div"),
            data:defaultProps,
            methods:{
                handleOK(){
                    defaultProps.handleConfirm && defaultProps.handleConfirm();
                    document.body.removeChild( vm.$mount().$el);

                },
                handleToggle(){
                    defaultProps.handleToggleCity &&defaultProps.handleToggleCity();
                    document.body.removeChild( vm.$mount().$el)
                }
            }
        })


       document.body.appendChild( vm.$mount().$el)
    }

})()





