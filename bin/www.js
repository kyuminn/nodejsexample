"use strict";

const app = require('../app');

const PORT = 3000;
app.listen(PORT,()=>{
    console.log('server is now running!!!');
})

// app.listen 이 server 실행시키는 부분인가봄.
// node bin/www.js 명령어를 입력해야 서버가 실행된다.