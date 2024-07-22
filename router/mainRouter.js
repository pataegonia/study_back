const express = require("express");
const router = express.Router();
// 주소 관련 명령어 따로 빼기

router.get("/", function(req, res){
    
    let query= page = req.query.page
    console.log(query);
    //query를 이용해서 사용자가 주소 뒤에 '?key=val'로 넘겨준 것을 받아오기(dic)
    res.render('index', {title:"EJS Main Page"})
    // app.js에서 view파일의 위치를 정해줘서 파일 이름만 써도됨
    //응답으로 그림파일을 전달해줄 때 사용
    // ejs를 사용함으로 그림 파일과 동시에 데이터까지 같이 전송할 수 있다.
})// get방식으로 주소 만들기

router.get("/about", function(req,res){
    res.send("About Page")
})

router.post("/postapi", function(req,res){
    let body = req.body;// post로 보낸 key와 val들을 얻는 법
    console.log(body);
    res.send("POST API");
})// post로 만들기 근데 post는 /뒤에 그냥 주소치는 걸로는 접속 x
// 주소치는 것은 get방식이기 때문에 post는 코드에서만 접속 가능
//테스트 하고 싶으면 postman이용

module.exports = router
// router를 내보낸다.