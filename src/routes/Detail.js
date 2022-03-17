import logo from './logo.svg';
import './App.css';
import { Button ,Card,Form,FormControl} from 'react-bootstrap';
import { useState } from 'react';

function App() {
  let [추천,추천변경]=useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
          <p>영화 추천 블로그</p>
           
      </div>


      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    // <div>
    //   <h2>제목</h2>
    //   <p>내용</p>
    // </div>
  )
}

export default App;

function Detail(){
  return(
    <h1>Detail</h1>
  )
}

export default Detail;