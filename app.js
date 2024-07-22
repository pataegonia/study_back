const express = require('express');
const helmet = require("helmet");
// 보안 관련 npm모듄인 헬멧 사용하겠다.
const { futimesSync } = require('fs');
// express 사용할때 사용 node_modules에서 express기능들을 express라는 변수안에
// 넣어서 사용하겠다.
const app = express();
app.use(helmet());
//helmet 사용

const mainRouter = require("./router/mainRouter");
//mainRouter 파일 안에 있는 router라는 변수 가져온 것
app.use('/', mainRouter);
// '/'에는 원하는 주소 넣으면 그 주소를 입력하고 라우터에 있는 주소 입력해야 가능


app.listen(3000, function(req,res){
    console.log("server on");
})// 3000port를 사용하겠다.