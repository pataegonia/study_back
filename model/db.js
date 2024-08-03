var Sequelize  =require("sequelize");
var sequelize;
// mysql 작성을 자바 문법에 맞게 해주는 도구

//sequelize변수에 database이름, root, 비밀번호, mysqp 정보 담긴 객체 전달
sequelize = new Sequelize("class101","clue9986","robin9986!",{
    host:"class101.c7swysayg0mk.ap-northeast-2.rds.amazonaws.com", //host이름
    port:3306, //mysql은 항상 3306
    dialect:"mysql",// 이용할 도구
    timezone: "+09:00",//시간
    define: {
        charset:"utf8",
        collate:"utf8_general_ci",//문자 인코딩
        timestamps:true, //데이터를 생성핧 때 시간 기록하게
        freezeTableName:true // 태이블 이름이 단수여도 상관 없다
    }
})

var db = {};
db.users = sequelize.import(__dirname + "/users.js");
//users라는 내가 만든 테이블 가져오기 
db.reviews = sequelize.import(__dirname + "/reviews.js");

db.guests = sequelize.import(__dirname+"/guests.js");

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;// app.js에 넘겨주기