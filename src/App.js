import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //   let [글제목, 글제목변경] = useState([
  //     "React 공부하기",
  //     "책 보기",
  //     "몽고DB 공부하기",
  //   ]);

  //   let [좋아요, 좋아요변경] = useState([0, 0, 0]); // 1.개별로 좋아요 구현을 위해 우선 좋아요를 Array로 바꾼다.
  //   let [modal, modal변경] = useState(false);
  //   let [modal2, modal2변경] = useState(false);
  //   let [방금누른제목, 방금누른제목변경] = useState(0);

  //   function 제목바꾸기() {
  //     var newArray = [...글제목];
  //     newArray[0] = "리액트 공부하기";
  //     글제목변경(newArray.sort());
  //   }

  //   // 좋아요 버튼 개별로 구현
  //   const 좋아요바꾸기 = i => {
  //     let 좋아요copy = [...좋아요]; // 2. Array로 된 state는 우선 복사를 한다. 이때 깊은 복사를 해서 참조 공유하지 않도록 한다.
  //     좋아요copy[i]++;
  //     좋아요변경(좋아요copy); // 3. State변경함수는 State를 전부 바꾸기 때문에 바뀐 값을 통째로 넣어야한다는 점 주의!!
  //   };

  //   function 반복된UI() {
  //     var array = [];
  //     for (var i = 0; i < 3; i++) {
  //       array.push(<div>안녕</div>);
  //     }

  //     return array;
  //   }

  //   // 사용할 때
  //   {
  //     반복된UI();
  //   }

  //   return (
  //     <div className="App">
  //       <div className="black-nav">
  //         <div>개발 Blog</div>
  //       </div>
  //       <button onClick={제목바꾸기}>변경 & 정렬</button>

  //       {글제목.map((a, i) => {
  //         return (
  //           <div className="list">
  //             <h3
  //               onClick={() => {
  //                 방금누른제목변경(i);
  //               }}
  //             >
  //               {a} <span onClick={() => 좋아요바꾸기(i)}> ❤ </span>
  //               {좋아요[i]}
  //             </h3>
  //             <p>1월 9일 발행</p>
  //             <hr />
  //           </div>
  //         );
  //       })}

  //       {modal === true ? (
  //         <Modal 글제목={글제목} 방금누른제목={방금누른제목} />
  //       ) : null}
  //       <button onClick={() => modal변경(!modal)}>
  //         {modal === true ? "숨기기" : "보여주기"}
  //       </button>
  //       <hr />
  //       <button onClick={() => modal2변경(!modal2)}>modal2</button>
  //       {modal2 === true ? <Modal2 /> : null}
  //     </div>
  //   );
  // }

  // function Modal(props) {
  //   return (
  //     <div className="modal">
  //       <h2>제목 : {props.글제목[props.방금누른제목]}</h2>
  //       <p>날짜</p>
  //       <p>상세내용</p>
  //     </div>
  //   );
  // }

  // function Modal2() {
  //   return (
  //     <div className="modal2">
  //       <h2>제목</h2>
  //       <p>상세내용</p>
  //     </div>
  //   );

  // 다시 한번 연습하기

  let [title, titleState] = useState([
    "리액트 배우기",
    "리액트 복습하기",
    "프로젝트 만들기",
  ]);
  let [like, likeState] = useState([0, 0, 0]);
  let [modalShow, modalShowState] = useState(false);
  let [modaltitle, modaltitleState] = useState(0);

  let [입력값, 입력값변경] = useState("");

  function likeChange(i) {
    let newLike = [...like];
    newLike[i]++;
    likeState(newLike);
  }

  function titleChange(inputTitle) {
    let newTitle = [...title];
    newTitle.unshift(inputTitle);
    let newLike = [...like];
    newLike.unshift(0);
    likeState(newLike);
    titleState(newTitle);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {title.map((t, i) => {
        return (
          <div className="list" key={i}>
            <h3 onClick={() => modaltitleState(i)}>
              {t}
              <span onClick={() => likeChange(i)}> ❤ {like[i]}</span>
            </h3>
            <p>1월 10일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* {입력값}
      <input
        onChange={e => {
          입력값변경(e.target.value);
        }}
      /> */}

      <div className="publish">
        <input
          onChange={e => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            titleChange(입력값);
          }}
        >
          저장
        </button>
      </div>

      <button onClick={() => modalShowState(!modalShow)}>
        {modalShow === true ? "숨기기" : "보여주기"}
      </button>
      {modalShow === true ? <Modal title={title} /> : null}
    </div>
  );

  function Modal(props) {
    return (
      <div className="modal">
        <h3>{props.title[modaltitle]}</h3>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }
}

export default App;
