// ES6 문법을 준수하겠다 선언
"use strict"; 

// 모듈
const express = require('express'); // express 모듈 다운로드
const app = express();

// 라우팅
// 여기서 routes/home 의 router를 사용하기 위해 하는 설정
const home = require("./src/routes/home") // 폴더 얻어오기 , home까지만 명시하면 자동으로 index 를 가져오나 봄..?

// 앱 세팅
app.set("views","./src/views"); // views 의 기본 폴더 위치 지정!! render 시 기본 폴더 하위로 작성하면 됌.
app.set("view engine","ejs");

// MiddleWare 등록 method => use()
app.use("/",home); // "/" 라는 경로가 오면 , 상수 home 에 저장된 경로로 가서 router 실행!!


// app.listen(3000,function(){
//     console.log('server is now running!!');
// })

module.exports = app;


