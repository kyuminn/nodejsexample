"use strict";

// hello 라는 controller 함수를 만들고, 이를 외부에서 사용해주기
const hello = (req,res) =>{
    res.render("home/index");
};

// 같은 표현
// function hello(req,res){
//     res.render("home/index");
// }


const login = (req,res)=> {
    res.render("home/login");
};

module.exports={
    hello,
    login,
}

/*
    JavaScript 의 Object는 원래 key:value 형태로 넣어주지만
    key값 하나만 넣어준다면 자체적으로 key와 이름이 같은 value를 넣어준다

    위의 표현은
    modult.exports={
        hello:hello,
        login:login,
    }
    와 같은 표현이다
*/