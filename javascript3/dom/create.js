/**
 * 1. createElement("div")
 * 新しい要素を作成する。
 * ※作成しただけでは、まだ画面には表示されない！
 */

const codomo = document.createElement("div"); // <div></div> を作成
codomo.textContent = "新しく作ったボックス"; // テキストを追加
codomo.style.background = "lightblue";
codomo.style.padding = "30px";

/**
 * 2. appendChild(子要素)
 * 親要素の最後に子要素を追加する。
 */

const oya = document.getElementById("container");
oya.appendChild(codomo); // <div id="container"> の中に codomo を追加

/**
 * 3. insertBefore(新要素, 参照要素)
 * 指定した要素(refEl)の前に新しい要素を挿入する。
 */

const newEl = document.createElement("p");
newEl.textContent = "これは挿入された段落です。";
const refEl = document.getElementById("ref");
oya.insertBefore(newEl, refEl); // refElの前に newEl を挿入

/**
 * 4. .remove()
 * 要素を削除する。
 */

const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", () => {
  newEl.remove(); // newEl を削除
});

/**
 * 5. innerHTML = ""
 * 親要素内のすべての子要素を削除する。
 */

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  oya.innerHTML = ""; // container内の全要素を削除
});
