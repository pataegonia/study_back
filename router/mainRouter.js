const express = require("express");
const router = express.Router();
// 주소 관련 명령어 따로 빼기
const db = require("../model/db");

const cheerio = require("cheerio");
// html코드를 가지고와서 html의 테그 등을 코드에서 다룰 수 있게 해줌
// html코드에서 클레스 이름, 태그이름을 가져와서 거기에 있는 데이터 가져올 수 있음
const axios = require("axios");
// 외부의 html코드를 가져올 때 사용하는 도구
const iconv = require("iconv-lite");
const url = "https://finance.naver.com/sise/lastsearch2.nhn"


router.get("/", function(req, res){
    
    let query= page = req.query.page
    console.log(query);
    //query를 이용해서 사용자가 주소 뒤에 '?key=val'로 넘겨준 것을 받아오기(dic)
    res.render('index', {title:"xornjsqkr's page"})
    // app.js에서 view파일의 위치를 정해줘서 파일 이름만 써도됨
    //응답으로 그림파일을 전달해줄 때 사용
    // ejs를 사용함으로 그림 파일과 동시에 데이터까지 같이 전송할 수 있다.
})// get방식으로 주소 만들기


router.get("/movie", function(req,res){
    let query= page = req.query.page;
    res.render("movie",{title:"영화 리뷰 사이트"});
})

router.post("/movie/review/create", function(req,res){
    let movie_id = req.body.movie_id;
    // 서버에서 사용할 변수 선언
    // movie_id라는 변수 안에 post로 보낸 값중 key값이 movie_id인거 
    let review = req.body.review;

    if(movie_id=='' || movie_id==0){
        res.send({success:400})
    }else{
        db.reviews.create({
            movie_id:movie_id,
            review:review
        }).then(function(result){
            res.send({success:200})
        })
    }

})

router.get("/movie/review/read",function(req,res){
    let movie_id = req.query.movie_id;

    db.reviews.findAll({where:{movie_id:movie_id}}).then(function(result){
        res.send({success:200,data:result});
    })
})


router.get("/about", function(req,res){
    let query = page= req.query.page;
    res.render("about", {title:"about page"});
})

router.get("/mysites", function(req,res){
    let query= page= req.query.page;
    res.render("showmine",{title:"my pages"});
})

router.get("/khusites", function(req,res){
    let query= page= req.query.page;
    res.render("showkhu",{title:"khu pages"});
})

// router.get("/data/create", function(req,res){
//     let user_id = parseInt(Math.random() * 10000)//userid는 랜덤 정수
//     db.users.create({user_id:user_id}).then(function(result){
//         res.send({success:200});
//     })
//     //db에 users라는 테이블에 새로 값을 만들고, 이게 잘 실행되면 send해라
//     // result에는 create한 결과값이 들어감
// })
// //db 데이터 추가하는 api 만들기

// router.get("/data/read", function(req,res){
//     db.users.findAll().then(function(result){
//         res.send({success:200, data:result});
//     })
//     //db에 있는 데이터를 찾아라 성공하면 send 해라
// })
// // db 데이터 읽는 api 만들기

// router.post("/data/update", function(req,res){
//     let target_id = req.body.target_id; // post방식으로 타겟id 넘겨줌
//     db.users.update({user_id:9999},{where:{user_id:target_id}}).then(function(result){
//         // user_id가 타겟id인 애를 9999로 바꿔라
//         //where은 sql문법인데 바꿀 애 지칭할때 써줘야함
//         res.send({success:200});
//     })
// })
// // db데어터 변경하는 api

// router.post("/data/del", function(req,res){
//     let target_id = req.body.target_id;
//     db.users.destroy({where:{user_id:target_id}}).then(function(result){
//         // destroy로 타겟아이디 애 지움
//         res.send({success:200});
//     })
// })

module.exports = router
// router를 내보낸다.