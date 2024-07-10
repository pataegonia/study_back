let arr=[1,2,3,4,5, "ar",true,{
    "key": "val",
    "list":[1,2,3,4]
}];
console.log(arr[1])
arr.push(6);
console.log(arr);
let dic = {
    "key":"val"
}
console.log(dic);
dic.key2="val2";
console.log(dic);
console.log(dic.key2);

for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }else if(i==1){
        console.log("start");
    }else{
        continue;
    }
    if(i==10){
        console.log("end");
    }
}
function x(a){
    return a*10;
}

let y=x(10);
console.log(y);

let str = "hihi-hihih";
console.log(str);
let str_arr = str.split("-"); //str to arr
console.log(str_arr); 
let arr_str = str_arr.join(" "); // arr to str
console.log(arr_str);
