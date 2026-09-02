const title = document.getElementById("title");
const chart = document.getElementById("Chart");
const btn = document.getElementById("btn");
const error = document.getElementById("error");
const loading = document.getElementById("loading");
let myChart;
const colors = [
    { background: "rgba(255, 99, 132, 0.2)", border: "rgba(255, 99, 132, 1)" },
    { background: "rgba(54, 162, 235, 0.2)", border: "rgba(54, 162, 235, 1)" },
    { background: "rgba(255, 206, 86, 0.2)", border: "rgba(255, 206, 86, 1)" },
    { background: "rgba(75, 192, 192, 0.2)", border: "rgba(75, 192, 192, 1)" },
];
//読み込みのアニメーション
window.addEventListener("load", function(){
    loading.classList.add("loaded");
});
//データを取り扱う関数
async function loadData(){
    //データを取得する
    const result = await fetch("./data.json");
    //json形式に変換する
    const data = await result.json();
    //タイトルのデータを表示する
    title.textContent = data.title || "タイトルがありません";

    //グラフのデータを表示する
    myChart?.destroy();///表示がかさまないように、グラフがすでに表示されている場合は削除する
    myChart = new Chart(chart, {
        type: "bar",
        data: {
            labels: data.labels || [],
            datasets: (data.datasets || []).map((ds, i) => ({
                ...ds,
                backgroundColor: colors[i % colors.length].background,
                borderColor: colors[i % colors.length].border,
                borderWidth: 2,
                pointRadius: 2,
            })),
        },
        options: {
        responsive: true,
        beginAtZero: true,
        },
    });
}
//ボタンがクリックされたときの処理
btn.addEventListener("click", async function(){
    try{
        await loadData();
    }catch(err){
        //エラーが発生した場合のエラーの表示
        error.textContent = "データの取得に失敗しました";
        console.error(err);
    }
});
