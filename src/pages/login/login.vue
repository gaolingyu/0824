<template>
<div class="box">
    <div class="con">
        <h3>登录</h3>
        <div class="inp1"><input type="text" placeholder="请输入用户名"></div>
        <div class="inp1"><input type="text" placeholder="请输入密码"></div>
        <div class="inp1"><button>登录</button></div>
    </div>
</div>
</template>
<script>
export default {
components:{
},
data() {
return {
}
},
methods: {
},
mounted() {
},
}
</script>
<style scoped>
.box{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right,#523545,#323d5e);
}
.con{
    width: 400px;
    height: 300px;
    background-color: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-70%);
    border-radius: 15px;
}
.con h3{
    text-align: center;
    padding-top: 10px;
}
.con .inp1{
    width: 70%;
    height: 30px;
    border-radius: 5px;
    margin: 30px auto;
}
.inp1 input{
    width: 90%;
    height: 30px;
    margin:  0 auto;
    outline: none;
    border:1px solid #dcdfe6;
    padding-left: 10px;
}
.con button{
    width: 95%;
    height: 35px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #409eff;
    color: #fff;
}
</style>