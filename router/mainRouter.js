const express = require("express");
const router = express.Router();
// 주소 관련 명령어 따로 빼기
const db = require("../model/db");

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

router.get("/data/create", function(req,res){
    let user_id = parseInt(Math.random() * 10000)//userid는 랜덤 정수
    db.users.create({user_id:user_id}).then(function(result){
        res.send({success:200});
    })
    //db에 users라는 테이블에 새로 값을 만들고, 이게 잘 실행되면 send해라
    // result에는 create한 결과값이 들어감
})
//db 데이터 추가하는 api 만들기

router.get("/data/read", function(req,res){
    db.users.findAll().then(function(result){
        res.send({success:200, data:result});
    })
    //db에 있는 데이터를 찾아라 성공하면 send 해라
})
// db 데이터 읽는 api 만들기

router.post("/data/update", function(req,res){
    let target_id = req.body.target_id; // post방식으로 타겟id 넘겨줌
    db.users.update({user_id:9999},{where:{user_id:target_id}}).then(function(result){
        // user_id가 타겟id인 애를 9999로 바꿔라
        //where은 sql문법인데 바꿀 애 지칭할때 써줘야함
        res.send({success:200});
    })
})
// db데어터 변경하는 api

router.post("/data/del", function(req,res){
    let target_id = req.body.target_id;
    db.users.destroy({where:{user_id:target_id}}).then(function(result){
        // destroy로 타겟아이디 애 지움
        res.send({success:200});
    })
})

module.exports = router
// router를 내보낸다.