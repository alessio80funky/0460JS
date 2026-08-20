/**
 * 1. .classList.add("active")
 * 指定したクラスを追加する
 */

box.classList.add("active"); // <div class="box active">


/** ✅
 * 2. .classList.remove("hidden")
 * 指定したクラスを削除する
 * ※ あらかじめ hidden が付いている想定
 */

box.classList.remove("hidden"); // hiddenクラスを削除


/** ✅
 * 3. .classList.toggle("open")
 * クラスの ON/OFF を切り替える（クリックで）
 */

toggleBtn.addEventListener("click", () => {
    box.classList.toggle("open");
    log.textContent = `.classList.toggle('open') → 現在: ${box.classList.contains("open")}`;
  });
