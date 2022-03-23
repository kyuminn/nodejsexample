
"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl');

// 라우팅
//router.get("/", (req,res)=>{
//    res.render("home/index");
//}); // router.get ("/")으로 요청이 정상적으로 들어왔을 때  request,response 객체를 익명함수 파라미터에 담고 익명함수 실행
// callback => 앞 함수의 실행 결과가 성공적으로 이루어졌을 때 호출되는 함수라고 생각하면 될 듯.
router.get('/',ctrl.hello);

// 위 표현과 같은 식
// router.get("/",function(req,res){
//     res.send("Now we are in root path");
// });

// router.get("/login",(req,res)=>{
//     res.render("home/login"); 
// })
router.get("/login",ctrl.login);

// 이 router를 외부 파일에서 인식해서 사용할 수 있도록 설정
module.exports = router;