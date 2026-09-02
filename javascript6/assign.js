//分割代入

//分割代入は配列やオブジェクトの中身をシンプルに取り出すための代入テクニックです。

//1.配列の分割代入

//従来の書き方
/*
let color = ["red", "blue", "green"];

let red = color[0];
let blue = color[1]
let green = color[2];

console.log(red, blue, green);
*/

//分割代入の場合

let color = ["red", "blue", "green", "yellow"];

let [ red, blue ,green, yellow ] = color;

console.log(red, blue, green, yellow);

//...other

let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let [one, two, three,...other] = data;

console.log(one,two,three);
console.log(...other);

//2.オブジェクトの分割代入

let person ={
    name:"John",
    age:30,
    country: "USA",
    city:"New York",
    job:"Enngineer"
}


//従来の書き方

/*
let name = person.name;
let age = person.age;
let country = person.country;
let city = person.city;
let job = person.job;

console.log(name,age,country,city,job);
*/
//分割代入の場合
/*
let { name: n, age: a, country: c,} = person;

console.log(n,a,c);
*/
//...rest

let {name: n, age: a, ...rest} = person

console.log(n,a);
console.log(rest);