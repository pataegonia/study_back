const express = require('express');
const helmet = require("helmet");
// 보안 관련 npm모듄인 헬멧 사용하겠다.
const { futimesSync } = require('fs');
// express 사용할때 사용 node_modules에서 express기능들을 express라는 변수안에
// 넣어서 사용하겠다.
const app = express();
const ejs = require("ejs");

app.set("view engine", 'ejs');
// 그림파일을 브라우저에 전달할 때 ejs를 사용하겠다. (확장자가 ejs)
app.set("views", "./views");
// 우리가 사용할 view관련 파일들은 그 경로에 있다.
app.use("/public", express.static(__dirname + "/public"));
//css나 이미지등 정적인 파일들은 위 폴더에 있다.
// express.static은 상대적인 주소를 알려주는 도구 이용

app.use(helmet());
//helmet 사용
app.use(express.json());
app.use(express.urlencoded());
//post방식으로 가져온 데이터를 서버에서 활용 할 수 있게 해줌 

const mainRouter = require("./router/mainRouter");
//mainRouter 파일 안에 있는 router라는 변수 가져온 것
app.use('/', mainRouter);
// '/'에는 원하는 주소 넣으면 그 주소를 입력하고 라우터에 있는 주소 입력해야 가능


app.listen(3000, function(req,res){
    console.log("server on");
})// 3000port를 사용하겠다.