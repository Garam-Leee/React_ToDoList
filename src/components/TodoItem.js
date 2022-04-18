import React from "react";
import styled, {css} from "styled-components";
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
    color: #dee2e6;
    font-size: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        color: red;
    }
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckCircle  = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 20px;
    font-size: 24px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${props => 
        props.done && 
        css`
            border: 1px solid #38d9a9;
            color:#38d9a9;
    `}
`;

const Text  = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => 
        props.done && 
        css` 
            color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });
    return (
      <TodoItemBlock>
        <CheckCircle done={done} onClick={onToggle}> {done && <MdDone />} </CheckCircle>

        <Text done={done}>{text}</Text>

        <Remove onClick={onRemove}>  <MdDelete /> </Remove>
      </TodoItemBlock>
    );
  }
  
  export default TodoItem;