//for文

/*

for(初期値; 条件式,更新++){
実行したいものをここに入れる
}

*/

for(let i = 0; i < 5; i++){
    console.log("値は",i);
}

//注意点

//無限ループ

//1
/*
for(let x = 0; x < 5; x--){
    console.log("値は",x);
}
*/
//2
/*
for(let z = 0; z < 5; ){
    console.log("値は",z);
}
*/

//少数を指定しない
/*
for(let j = 0.1; j < 5; j += 0.1){//バグ発生
    console.log("値は",j);
}
*/
//for文の中でifを使うことができる

for(let k = 0; k < 5; k++){
    if(k % 2 === 0){
        k++
    }
    console.log(k)
}


//for...in文（オブジェクトにしか使わない）

let person ={
    name:"John",
    age:30,
    country: "USA",
    city:"New York",
    job:"Enngineer"
}

for (const key in person){
    console.log(`${key}:${person[key]}`)
}

//for...of文（配列にしか使われない）

let color = ["red", "blue", "green", "yellow"];

for (const iro of color){
    console.log(iro);
}

//補足↓↓↓

//for...of分割代入

//配列のネストその①

const data =[
    [1,2,3],
    [2,3,4],
    [7,8,9]
];

for(const [a,b,c] of data){
    console.log(a,b,c);
    console.log(a)
    console.log(b)
};

///配列のネストその②

const data2 = [
    {name:"John", age:30,country: "USA"},
     {name:"Mario", age:41,country: "italy"},
      {name:"Franz", age:54,country: "germany"}
]


for(const {name, age} of data2){
    console.log(name,age);
}