///比較演算子

//評価型「===, !==, ==, !=」

/**
<<<<<<< HEAD
 * == ->  大体同じ  バグの温床基本的使われない
 * === ->  完全に同じ[実務によく使われます]
 * != ->  大体違う　バグの温床基本的使われない
=======
 * == ->  大体同じ  バグ温床基本的使われない
 * === ->  完全に同じ[実務によく使われます]
 * != ->  大体違う　バグ温床基本的使われない
>>>>>>> origin/main
 * !== ->  完全に違う[実務によく使われます]
 */

let x = 0 == false;//この場合は同じfalsy値として判断します
console.log(x);//true

let y = 0 === false;//この場合は０はナンバー型そしてfalseはブリアン型と判断します
console.log(y);//false

let j = 0 != false;
console.log(j);//false

let k = 0 !== false;
console.log(k)//true

///大小型　[<] [>] [<=] [>=]

//number

a = 2 > 10;//false
b = 1 < 10;//true

c = 18;
d = 21;

console.log(c <= 20)//true ２０を含めて２０以下の数値がtrue
console.log(d >= 20)//true ２０を含めて２０の以上の数値がtrue

//string
//unicode規格で判断する
    //     50    49 
let num = "2" > "1000";//true  ストリング型の場合は頭文字で判断する
    //     41       62
let str = "Apple" > "banana";//false



