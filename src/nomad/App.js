import { useState } from 'react'; 
import './Style.css';
import ToDay from './Date'; 
import styled from 'styled-components';

const CircleButton = styled.button`
  background: #2c5af7;
  &:hover {
    background: #748dff;
  }
  &:active {
    background: #0031c3;
  }
   
    cursor: pointer;
    width: 35px;
    height: 35px;
    color: white;
    font-size: 30px; 
    border: none;
    outline: none; 
`;

function App() {
  const [ToDo, setToDo] = useState("");
  const [ToDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (ToDo ===""){
      return;
    }
    setToDo("");
    setToDos((currentArray) => [ToDo, ...currentArray]) //currentArray
  };

  
  return (
    <div className='content'>
      <ToDay />
        <form onSubmit={onSubmit} className='todo_textbox'>
          <input className='todo_input'
                 onChange={onChange} 
                 value={ToDo} 
                 type="text" 
                 placeholder='Write your ToDo...'
          />
          <CircleButton>+</CircleButton>
          </form>
        <hr/>
      <ul>
        {/* 배열에 들어있는 각각의 element들을 바꾸고 싶을때, map을 사용해서 배열안에 함수를 넣어준다 */}
        {/* 같은 Component의 list를 render할 때 [key(prop)] "고유값" 을 넣어야함 */}
        {ToDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
