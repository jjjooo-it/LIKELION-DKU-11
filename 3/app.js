console.log("hi");

//변수 선언
const a = 1; //상수
let b =2; //변수 

//데이터타입
let num =2; //숫자
let str = "hi"; //문자
let bool = true; //불린
let n = null; 
let unde; //정의가 되지 않는다. 

//배열
let arr = [1,2,"hi", false, null];

console.log(arr[2]);

arr.push("new"); //추가
console.log(arr);

arr.shift(); //첫번쨰 요소 삭제
console.log(arr);

arr.pop(); //마지막 요소 삭제
console.log(arr);

arr.splice(1,1); //첫번째부터 1개를 지우겠다

//if문

//switch/case 문
//그냥 언어라 똑같음

let g= 3;
//object는 class나 구조체라고 생각하면됨
const player = {
    name : "seiyeon",
    level : 23,
    points : 10,
    alive : true,
    sayHello : function(g){
        return g;
    }
}

console.log(player.name);
console.log(player["name"]);

player.level = 35;
console.log(player.level);
console.log(player["level"]);

player.pet = "min";

//함수
function plusOne(a,b){
    return a+b;
};

//객체 안에 함수 넣기 
