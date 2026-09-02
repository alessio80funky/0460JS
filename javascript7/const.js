//constructor

//コンストラクター関数はデータと関数を効率よくまとめるための設計図です！

function Human(name, age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log(`こんにちは、私は${this.name}です！`)
    }
};

const taro = new Human("太郎",30);
const hanako = new Human("花子",25);

console.log(taro.name);//太郎
console.log(hanako.name)//花子

hanako.greet();

//========================//


const Taro ={
    name:"太郎",
    age:30,
    greet: function(){
         console.log(`こんにちは、私は${name}です！`)
    }

}


const Hanako ={
    name:"花子",
    age:25,
    greet: function(){
         console.log(`こんにちは、私は${name}です！`)
    }

}

//パターンコンストラクター

const str = String("こんにちは");
console.log(typeof str);

const num = Number(10) ;
console.log(typeof num);

const now = new Date();
console.log(now.toLocaleString())

