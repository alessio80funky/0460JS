let text = document.querySelector("#colorText");

let color = document.querySelector("#colorPicker");


function colorBg(){

document.body.style.backgroundColor = color.value;

if (color.value === "#ffffff"){
   text.textContent = `カラーコード:${color.value} (white)` ; 
}else if (color.value === "#000000"){
    text.textContent = `カラーコード:${color.value} (black)` ;
}else{
        text.textContent = `カラーコード:${color.value}` ;
}

}


color.addEventListener("input",colorBg);

let text = document.querySelector("#colorText").textContent = "テスト"
let color = document.querySelector("#colorPicker");

function colorBg(){


}

