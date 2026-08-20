/**
 * 1. .textContent
 * テキストのみを取得・変更できるプロパティ　（インスタンスプロパティ）
 * HTMLタグは解釈されず、単なる文字列として扱われる
 */


const el1 = document.getElementById("text1");
console.log(el1.textContent); // 元の文字を取得
el1.textContent = "変更後の文字"; // テキストを書き換え

/**
 * 2. .innerHTML
 * HTMLタグを含めて取得・変更できるプロパティ　（インスタンスプロパティ）
 * → innerHTMLを使うとタグ構造も書き換えられる！
 */
const el2 = document.getElementById("text2");
console.log(el2.innerHTML); // 元のHTMLを取得
el2.innerHTML = "<b>太字</b>と<i>斜体</i>を追加";

/**
 * 3. .setAttribute(name, value) (メソッド)(あまり使われない)
 * 要素の属性を新しく追加したり、変更したりできるメソッド
 * 第1引数：属性名
 * 第2引数：設定したい値
 */

const img = document.getElementById("photo");
img.setAttribute("src", "photo.jpg");
img.setAttribute("alt", "サンプル写真");

/**
 * 4. .getAttribute(name)(メソッド)(あまり使われない)
 * 属性値を取得するメソッド
 */

const srcValue = img.getAttribute("src");
console.log("画像のsrc属性は：" + srcValue);

/**
 * 5. .style.プロパティ　（インスタンスプロパティ）
 * 要素のCSSを直接変更できる
 * 例：el.style.color = "red";
 */

const el3 = document.getElementById("text3");
el3.style.color = "red"; // 文字色を赤に
el3.style.fontSize = "24px"; // 文字サイズ変更
el3.style.backgroundColor = "yellow"; // 背景色変更