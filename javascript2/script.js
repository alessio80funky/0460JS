const button = document.getElementById("btn");


button.addEventListener("click", function(){

const name = document.getElementById("name").value;
const mail = document.getElementById("mail").value;
const msg = document.getElementById("msg").value;

const res = document.getElementById("result");

    res.textContent = `【新規受付】
氏名：${name}様
メーる：${mail}
詳細：${msg}

※このメッセージはHTMLから自動送信されました。`;
})
