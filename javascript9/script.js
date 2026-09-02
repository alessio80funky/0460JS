// 画面上の要素を取得するための変数です。
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpensesEl = document.getElementById('totalExpense');
const balanceEl = document.getElementById('totalBalance');

const form = document.getElementById('transactionForm');

const descInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');

const transactionsList = document.getElementById('transactionsList');
// 取引データをブラウザに保存する際のキー名です。
STORAGE_KEY = 'kakeibo_20260902';
// 取引データを格納する配列です。
let transactions = [];

// 家計簿を使い始めるための最初の準備をする関数です。
// フォームが送信されたときの処理を登録し、保存済みのデータを読み込んで画面を更新します。
function init() {
    form.addEventListener('submit', submitTransaction);
    loadTransactions();
    updateUI()
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
    trensactions.unshift(transaction);
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
}

// すべての取引から収入と支出の合計、残高を計算して表示する関数です。
// 残高がプラス・マイナス・ゼロのどれかによって、文字の色も変更します。
function updateSummary() {
    // 収入の合計を計算します。
    // 収入の取引だけを抽出し、金額を合計します。
    // 同様に支出の合計も計算します。
    const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
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
