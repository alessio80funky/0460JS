//データ型に関しての注意：

//ストリング型・ナンバー型を計算するときに注意
/*
let num = "abc" * 3;
console.log(num)//NaN (Not a Number)  文字列と数値を計算できません。
*/

//ストリング型に関しての注意

name = "\"luigi\"";//ダブルクォーテーションの中にダブルクォーテーションは使えない。
name1 = '\'mario\'';//シングルクォーテーションの中にシングルクォーテーションは使えない。
//ストリング型のの中にシングルクォーテーションを入れたい場合はエスケープシーケンスをつかって無理やりにクォーテーションを入れる。

console.log(name);//"luigi"
console.log(name1);//'mario'


///バッククォーテーション

let code = 123456789;

let word = `code:${code}`;///テンプレート文字列

console.log(typeof word);//string
console.log(typeof code);//number

console.log("java" + "script");//文字の結合を行われる。動的なデータに向かない書き方。固定文書にしか使えない。
console.log("java" + 10);///結合されるとナンバー型がストリング型になってしまうため、ナンバー型という型維持したい場合はテンプレート文字列を使う

//それぞれのデータを変数に入れるかそれかテンプレート文字列を使う
let a = "java";
let b = 10;

console.log( typeof a + typeof b);

console.log(10 + 10 + "10" + 10 + 10);//20101010　バグ


//配列に関して補足

//配列は順番にデータを管理する箱です。
//             0         1         2
let fruit = ["apple", "banana", "orange"];///インデックス番号

console.log(fruit)//[ 'apple', 'banana', 'orange' ]
console.log(fruit[0])  //インスタンスのプロパティの指定
console.log(fruit[1])

///配列のネスト（配列の中に配列が入っている）

let usr = [
    // 0      1
    ["taro", 20],//0番
     // 0      1
    ["hanako", 21],//１番
    //　 0      　1
    ["hidetada", 28]//２番
]

console.log(usr[0])//[ 'taro', 20 ]
console.log(usr[0][0])//taro
console.log(usr[1][1])//21


//オブジェクトに関しての補足


let person = {
//  キー 　値
    name:"太郎",
    age:20
};

console.log(person);//{ name: '太郎', age: 20 }
console.log(person.name)//太郎
console.log(person.age)//20


//オブジェクトネスト


