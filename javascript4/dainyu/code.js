//代入演算子　（データを代入して更新する）

//単独代入：　a = b

//複合代入：　（論理型）「&&= ||= ??=」

//複合代入：　（算術型）「+=, -=, *=, /=, %=, **=」

//=========================================================//

//複合代入：　（算術型）

//number

let x = 10;

x += 5;//15
x -= 3;//12
x *= 2;//24

console.log(x);

//string

let message = "hi";

message += "world";

console.log(message);//hiworld


//複合代入：　（論理型）「&&= ||= ??=」

//値が特定の条件を満たすときだけ代入を行う演算子

//truthy値：　true,すべての数値（０以外）,すべての文字列（空文字以外）,配列,関数,オブジェクトなど

//falsy値：false, 0, "",null,undefined, NaN 

// [nullとundefinedはfalsyでありながら同時にnullishカテゴリ別に所属する]

//①　&&= (and)
//truthy値でしたら条件を満たすので、代入を行います

let z = 0.1;
z &&= 200;
console.log(z);//200

//②　||= (or)
//falsy値でしたら条件を満たすので、代入を行います

let k = 0;
k ||= 300;
console.log(k);//300


//②　??= (nullish)
//null値もしくはundefined値でしたら条件を満たすので、代入を行います

let j = null;
j ??= 400;
console.log(j);//400

