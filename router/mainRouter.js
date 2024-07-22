const express = require("express");
const router = express.Router();
// 주소 관련 명령어 따로 빼기

router.get("/", function(req, res){
    res.send("Hello World");
})// get방식으로 주소 만들기

router.get("/about", function(req,res){
    res.send("About Page")
})

module.exports = router
// router를 내보낸다.