import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Form, FormControl } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  let [추천, 추천변경] = useState(0);
  let [toDo, setToDo] = useState("");
  let [toDos,setToDos]=useState([]);
  const onChange=(event)=>{
    setToDo(event.target.value);
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    if(toDo===""){
      return;
    }
    
    setToDos((currentArray)=>[toDo,...currentArray]);
    setToDo("");
  };//
  console.log(toDos);
  let [modal, setModal] = useState(true);
  useEffect(()=>{
    let timer=setTimeout(()=>{
      setModal(false);
    },3000)
  })
  return (


    <div>
      <div className="black-nav">
         <p>영화 추천 블로그</p>
       </div>
      <h1>My To Dos {toDos.length>=1?toDos.length:null}</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write Your to do "></input>
      <button>Add To Do </button>
      </form>
      </hr>
      {toDos.map()}
      </div>
    // <div className="App">
    //   <div className="black-nav">
    //     <p>영화 추천 블로그</p>
    //   </div>
    //   {modal===true?<Modal />:null}
    //   <div>
    //     <span
    //       onClick={() => {
    //         추천변경(추천++);
    //       }}
    //     >
    //       추천
    //     </span>{" "}
    //     : {추천}
    //     <button
    //       onClick={() => {
    //         추천변경(0);
    //       }}
    //     >
    //       추천초기화
    //     </button>
    //   </div>

    //   <Poster />
    // </div>
  );
}

function Poster() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    // <div>
    //   <h2>제목</h2>
    //   <p>내용</p>
    // </div>
  );
}
function Modal() {
  return <div className="main-modal">3초 안에 등록시 이벤트 당첨</div>;
}
export default App;
