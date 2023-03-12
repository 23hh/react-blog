import { useState } from "react";
import "./App.css";

function App() {
  let post = "メニュー";
  let [글제목, 글제목변경] = useState(["남자코트 추천", "ㄱ맛집", "코딩"]);
  let [좋아요, 좋아요변경] = useState(0);
  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        정렬버튼
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>{" "}
          {좋아요}
        </h4>
        <p>２月17日</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>２月17日</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>２月17日</p>
      </div>
    </div>
  );
}

export default App;
