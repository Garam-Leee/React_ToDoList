import React from 'react';
import styled from 'styled-components'; 
import { useTodoState } from '../TodoContext';

const StyledDiv = styled.div`  
    margin-top: 5%;
    margin-bottom: 5%;
    .day{
        margin-top: 4px;
        color: #868e96;
        font-size: 20px;
    }
    h1{
        margin: 0;
        font-size: 35px;
        color: #343a40;
    }

`;

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;

    .task{
        margin-top: 40px;
        color: #20c997;
        font-size: 15px;
        font-weight: bold;
    }
`;

function Head() {

    const todayTime = () => {
        let now = new Date();  // 현재 날짜 및 시간
        let todayYear = now.getFullYear();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        let dayOfWeek = week[now.getDay()]; 

        return todayYear + '년' + todayMonth + '월' + todayDate + '일' + dayOfWeek;
    }

    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done); 
    // useTodoState에서 목록을 받아와서 done이 아닌것을 뽑아낸 후 전달
     
    return (
        <TodoHeadBlock>
            <StyledDiv>
                <h1>{todayTime().slice(0, 10)}</h1>
                <span className='day'>{todayTime().slice(10, 13)}</span>
            </StyledDiv>
            <div className="task">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}
export default Head;