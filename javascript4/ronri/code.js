//論理演算子　（データを判断する演算子）：　[&&] [||] [!]

// && (and) ・　|| (or) 　・! (not)否定演算子

//==============================================//

//&& (and) そして
//          true        true
console.log(5 > 3 &&  10 > 7)//true trueになるためにすべての条件がtrueでなければならない
//          true       false      true
console.log(5 > 3 &&  10 < 7 && 20 > 10)//false



//||(or) もしくは
//          true       false
console.log(5 > 3 ||  10 < 7)//true   どちらかtrue一つでもあればtrueになります
//          false      false    false
console.log(5 < 3 || 10 < 7 || 20 < 10)//false


console.log(!true)//false
console.log(!false)//true

let age = 17;
let isStudent = true;

if(age >= 18 && isStudent){
    console.log("大学生")
}else if (age >= 18 && !isStudent){
    console.log("学生じゃない")
}else{
    console.log("高校以下や未成年もしくはその他")
}