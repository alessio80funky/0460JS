//非同期処理

//.then()　外部のリンクにしか使えない　ES2015までに使われていた。

fetch("data.json")
.then( res => JSON.parse(res))//res.json()これも使います　jsonとして構築
.then( data => console.log(data))
.catch(err => console.log(err))

//async/await 現代はこちらが使われています

try{
async function load(){
    const res = await fetch(data.json);
    const data = await res.json();
    console.log(data);
}
}catch(err){
    console.log(err)
}
