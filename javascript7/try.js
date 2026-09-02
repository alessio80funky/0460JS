//try....catch
/*
try{
    console.log(name);
}catch(err){
    console.log("メッセージ：" + err.message)//メッセージ：name is not defined
}
*/

x = 4;
y = 0;

try{
    if(y === 0){
        throw new Error("割り切れない")
    }

let z =  x / y;

console.log(z);

}catch(e){
 console.log(`エラー:${e.name}  エラーの内容：${e.message}`)
}