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

