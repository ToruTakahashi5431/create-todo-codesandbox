import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncomplete(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ、pタグを生成
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";

    // liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backbutton);
    li.appendChild(addTarget);
    console.log(li);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncomplete(deleteButton.parentNode);
  });

  // button(戻す)タグ生成
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  console.log(returnButton);
  returnButton.addEventListener("click", () => {
    alert("return");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
