<template>
    <div class="messageBox">
        <div class="messageBox-title">{{title}}</div>
        <div class="messageBox-content">{{content}}</div>
        <div class="messageBox-btn">
            <v-touch tag="button" @tap="handleToggle">{{toggleCity}}</v-touch>
            <v-touch tag="button" @tap="handleOK">{{confirm}}</v-touch>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageBox"
    }
</script>

<style scoped>
    .messageBox{
        bottom: 0;
        max-height:3rem;
        left: 0;
        margin: auto;
        position: absolute;
        right: 0;
        top: 0;
        width: 5rem;
        z-index: 10;
        background: #fff;
        display: flex;
        flex-direction: column;

    }
    .messageBox>.messageBox-title{
        height:.8rem ;
        border-bottom:1px solid #ccc;
        background: #F8F8F8;
        line-height: .8rem;
        padding-left: .3rem;
        font-size: .3rem;
    }
    .messageBox-content{
        flex: 1;
        text-align: center;
        min-height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .3rem;
    }
    .messageBox>.messageBox-btn{
        height: .7rem;
        display: flex;
        justify-content: flex-end;
    }
    .messageBox>.messageBox-btn>button{
        border:0;
        width: 1.2rem;
        height: .6rem;
        background: #1E9FFF;
        color:#fff;
        font-size:.26rem;
        border-radius: 5px;
        margin-right: .2rem;
    }
</style>