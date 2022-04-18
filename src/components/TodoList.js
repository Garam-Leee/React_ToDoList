import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem"
import { useTodoState } from '../TodoContext';
 
const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px; 
    overflow-x: auto; 
`;
 // flex: 1;을 설정해서 자신이 차지할 수 있는 영역을 꽉 채우도록 설정

 function TodoList() {
    const todos = useTodoState(); 
    return (
      // 실제 화면에 보여주는 Block TodoItem에서 내용을 가지고와서 뿌려줌

      <TodoListBlock> 
        {todos.map(todo => (
          <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
          />
        ))}
      </TodoListBlock>
    );
  }
 
export default TodoList;