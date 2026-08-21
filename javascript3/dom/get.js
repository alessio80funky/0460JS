//DOM操作 get系

/**
 * 1. getElementById()
 * id属性で1つの要素を取得する
 */

const title = document.getElementById("title");
title.textContent = "こんにちは";
title.style.color = "red";

/**
 * 2. getElementsByClassName()
 * クラス名で複数の要素を取得する
 */

const texts = document.getElementsByClassName("text");
for (let el of texts) {
  el.style.color = "green"; // すべての要素の文字をに緑にする
}

/**
 * 3. getElementsByTagName()
 * タグ名で要素を取得する
 */

const para = document.getElementsByTagName("p");
//仮想配列としてまとめる
para[1].style.fontWeight = "bold"; // 太字にする

/**
 
 * CSSセレクタ（最初の要素だけ）で一致する要素を取得する（.を使います）
//htmlのid属性の連携にも使われます(idの場合は＃を使います）
 */

const firstBox = document.querySelector(".box");
const secondBox = document.querySelector(".box");
firstBox.textContent = "最初のボックス";
firstBox.style.background = "gold"
secondBox.textContent = "最初のボックス";
secondBox.style.background = "gold"


/**
 * 5. querySelectorAll()
 * CSSセレクタで一致するすべての要素を取得する
 */

const items = document.querySelectorAll(".item");
items.forEach((el, index) => {
  el.textContent += ` 🍎(${index + 1})`;
  el.style.color = "green";
});