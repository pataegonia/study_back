module.exports = function(sequelize, DataTypes){
    // 함수 파라메터는 sequelize 쓰면서 자동으로 넘겨줌
    return sequelize.define("users", {
        //users는 테이블 이름
        // 아래부터는 엑셀로 따지면 열에 들어갈 제목들
        idx:{
            type:DataTypes.INTEGER,//type지정
            autoIncrement:true,//자동으로 식별값을 1씩 증가시켜줌
            primaryKey:true, // 식별값이 이 열의 값이다
            allwNull:false // 인덱스 값이 null이면 안된다.
        },
        user_id: {
            type:DataTypes.STRING(250)// 이 값은 string이고 최대 250
        }
    })
}