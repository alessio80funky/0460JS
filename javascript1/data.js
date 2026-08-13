//javascriptデータ型

/*プリミティブ型

プリミティブ型は、数値や文字列などの基本的なデータ型です。

プリミティブ型はには以下の種類があります。


- 数値型 (Number)　=>  整数や少数などの数値を表すデータ型です。

- 文字列型 (String)　=>  文字の並びを表すデータ型です。

- 真偽値型 (Boolean)　=> trueまたはfalseの値を表すデータ型です。

- null (特殊型)　=> 　値がないことを表すデータ型です。

- undefined (特殊型)　=>  値が未定義であることを表すデータ型です。

*/

let number = 42;// 数値型 (Number)

let test = "Hello"; //文字列型 (String) ""  もしくは　''で囲みます 

let isStudent = true;// 真偽値型 (Boolean)

let empty = null;// null (特殊型)

let notDefined;// undefined (特殊型)

/*参照型

参照型は、オブジェクトや配列などの複雑なデータ型です。

参照型は以下の種類があります

-　オブジェクト型　(Object) => プロパティを持つデータ型です。

-  配列型 (Array) => 要素の並びを表すデータ型です。

*/


let person = {
    name:"太郎",
    age:20
};//オブジェクト型


let number = [1,2,3,4,5,6,7,8,9]//配列型