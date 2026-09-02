// 画面上の要素を取得するための変数です。
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpensesEl = document.getElementById('totalExpense');
const balanceEl = document.getElementById('totalBalance');

const form = document.getElementById('transactionForm');

const descInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');


const $ = (id) => document.getElementById(id);



const transactionsList = document.getElementById('transactionsList');
// 取引データをブラウザに保存する際のキー名です。
const STORAGE_KEY = 'kakeibo_20260902';
// 取引データを格納する配列です。
let transactions = [];
window.addEventListener("load", function(){
    loading.classList.add("loaded");

// 家計簿を使い始めるための最初の準備をする関数です。
// フォームが送信されたときの処理を登録し、保存済みのデータを読み込んで画面を更新します。
function init() {
    form.addEventListener('submit', submitTransaction);
    loadTransactions();
    updateUI();
    chartAnalytics();
}

init();

// フォームに入力された収入・支出を、新しい取引として追加する関数です。
// 入力内容が正しいか確認してから保存し、最新の内容を画面に表示します。
function submitTransaction(e) {
    // フォームの送信によるページの再読み込みを防ぎます。
    //データの重複を防ぐために必要です。
    e.preventDefault();

    const description = descInput.value;
    const amount = parseFloat(amountInput.value);
    const type = typeInput.value;
    // 入力内容が正しいか確認します。
    if(!description || !amount || amount <= 0) {
     alert('正しい値を入力してください。');
     return;
    }
    // 新しい取引のオブジェクト(テンプレート)を作成します。
    const transaction = {
        description,
        amount,
        type,
        id: Date.now(),
        date: new Date().toLocaleString("ja-JP")
    };
    // 取引の配列の先頭に追加します。
    transactions.unshift(transaction);
    saveTransactions();
    updateUI()
    // フォームの入力内容をリセットします。
    form.reset();
}

// ブラウザに保存されている取引データを読み込む関数です。
// 保存されたデータがある場合は、文字列からJavaScriptで使える配列に戻します。
function loadTransactions() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        transactions = JSON.parse(stored);
    }
}

// 現在の取引データをブラウザに保存する関数です。
// 配列はそのまま保存できないため、JSON形式の文字列に変換しています。
function saveTransactions() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

// 指定されたIDと同じ取引を削除する関数です。
// 削除後のデータを保存し直し、画面も最新の状態に更新します。
function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    saveTransactions();
    updateUI()
}

// 画面に表示する内容をまとめて更新する関数です。
// 現在は、収入・支出・残高の合計表示を更新しています。
function updateUI(){
    updateSummary();
    updateTransactionsList();
}

// すべての取引から収入と支出の合計、残高を計算して表示する関数です。
// 残高がプラス・マイナス・ゼロのどれかによって、文字の色も変更します。
function updateSummary() {

    // 収入の合計を計算します。
    const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    // 同様に支出の合計も計算します。
    const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    // 金額を合計します。
    const balance = income - expense;

    // 計算結果を画面に表示します。
    totalIncomeEl.textContent = `${income.toLocaleString()}円`;
    totalExpensesEl.textContent =  `${expense.toLocaleString()}円`;
    balanceEl.textContent =  `${balance.toLocaleString()}円`;
    // 残高の値によって文字色を変えます。
    if (balance > 0) {
        balanceEl.style.color = '#4caf50';
    }else if (balance < 0) {
        balanceEl.style.color = '#f44336';
    }else {
        balanceEl.style.color = '#2196f3';
    }
}

///データが読み込まれると、データがリストアップされ、データの内容が表示されます。
function updateTransactionsList() {
    transactionsList.innerHTML = '';

    transactions.forEach(t => {
        //データのリストの内容の生成の機能
        const li = document.createElement('li');
        li.className = `transaction-item ${t.type}`
       //データの表示のパターン（ユーザー側）
        const symbol = t.type === 'income' ? '+' : '-';
       
        li.innerHTML=`<div class="transaction-info">
                <div class="transaction-description">${t.description}</div>
                <small style="color: #999;">${t.date}</small>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span class="transaction-amount ${t.type}">
                    ${symbol}¥${t.amount.toLocaleString()}
                </span>
                <button class="btn-delete" onclick="deleteTransaction(${t.id})">削除</button>
            </div>`;

            ///リスアップされたデータは最新データ順に表示します
            transactionsList.appendChild(li);
    })

}

// 「グラフ表示」ボタンが押されたときに、収支グラフを表示する関数です。
function chartAnalytics(){
    const colors = [
    { background: "rgb(171, 231, 200)", border: "rgb(6, 102, 58)" },
    { background: "rgb(251, 109, 88)", border: "rgb(255, 0, 0)" },
    { background: "rgb(129, 154, 253)", border: "rgb(25, 0, 255)" },
];

$("btn").addEventListener("click", function(){
     // 収入の合計を計算します。
    const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    // 同様に支出の合計も計算します。
    const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    // 金額を合計します。
    const balance = income - expense;

    $("title").textContent = "収支グラフ";

    //グラフのデータを表示する
    // すでにグラフがある場合は削除し、何度押しても作り直せるようにします。
    const existingChart = Chart.getChart($("Chart"));
    if (existingChart) {
        existingChart.destroy();
    }
    
    new Chart($("Chart"), {
        type: "pie",
        data: {
            labels: ["収入","支出","合計"],
            datasets: [{
                label:"合計",
                data:[income,expense,balance],
                borderWidth: 2,
                borderColor: [colors[0].border, colors[1].border, colors[2].border],
                backgroundColor: [colors[0].background, colors[1].background, colors[2].background]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    });
}



});






