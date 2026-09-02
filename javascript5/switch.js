//switch文

/*
switch(引数){
    case  値１:
        //実行したい処理を書く
        break;
    case  値２:
        //実行したい処理を書く
        break;
    case  値３:
        //実行したい処理を書く
        break;
    default:
        //どのcasaにも当てはまらない場合に実行される処理
}
*/
/*
let rank = "Z";

switch (rank) {
    case "S" :
        console.log("Sランクです")
        break;//必ず書く
     case "A" :
        console.log("Aランクです")
        break;
     case "B" :
        console.log("Bランクです")
        break;
    default:
        console.log("Dランク")
}
*/

//fall through (フォールスルー)


let rank = "S";

switch (rank) {
    case "S" :
        console.log("Sランクです")

     case "A" :
        console.log("Aランクです")
 
     case "B" :
        console.log("Bランクです")
 
    default:
        console.log("Dランク")
}