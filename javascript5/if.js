//javascriptのプログラム構造が３つです

//順次構造
//分岐構造(選択)
//反復構造(繰り返し処理)


//if文


/*

if もし　(条件式){
    条件式がtrueになる場合こちらを実行する
}else　それ以外{
    条件式がfalseになる場合こちらを実行する
}
*/

let x = 11;

if(x >= 10){
    console.log("10以上です")
}else{
    console.log("10未満です")
}

//else if文
//条件が複数ある場合は使用する構文です。

let score = 89;

if(score >= 90){
    console.log("Aです")
}else if(score >= 80){
    console.log("Bです")
}else if(score >= 70){
    console.log("Cです")
} else{
    console.log("Dです")
}
