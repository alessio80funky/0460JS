//forEachメソッド
//             0,1,2,3,4,5,6,7,8 index
let numbers = [1,2,3,4,5,6,7,8,9];

//for
/*
for(i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
*/
//forEach
/*
numbers.forEach((n) => {
    console.log(n)
})
*/
//プロパティのパターン（指定の仕方）

numbers.forEach((value, index, array) => {
    //console.log(value);
    //console.log(index);
    console.log(array);//配列全体を取り出す（頻繫につかわれないですが、覚えた方がいい）
})


const score = [80, 90, 100, 70, 60];

score.forEach(function(score){
    if (score >= 80){
        console.log(score + "点は合格です")
    }else{
        console.log(score + "点は不合格です")
    };
});

for(let s = 0; s < score.length; s++){
    if(score[s] >= 80){
         console.log(score[s] + "点は合格です")
    }else{
         console.log(score[s] + "点は不合格です")
    }
  
}
