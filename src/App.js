import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "React 공부하기",
    "책 보기",
    "몽고DB 공부하기",
  ]);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "리액트 공부하기";
    글제목변경(newArray.sort());
  }

  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>변경 & 정렬</button>
      <div className="list">
        <h3>
          {글제목[0]} <span onClick={() => 좋아요변경(좋아요 + 1)}> ❤ </span>
          {좋아요}
        </h3>
        <p>1월 9일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>1월 9일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>1월 9일 발행</p>
        <hr />
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
