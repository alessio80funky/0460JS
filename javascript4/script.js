const button = document.getElementById("btn");


button.addEventListener("click", function(){

const name = document.getElementById("name").value;
const mail = document.getElementById("mail").value;
const msg = document.getElementById("msg").value;

const res = document.getElementById("result");

    res.textContent = `インポートしたデータ:${name}、${mail}、${msg}`;
})
