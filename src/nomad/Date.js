import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 5%;
`;


const ToDay = () => {
    const todayTime = () => {
        let now = new Date();  // 현재 날짜 및 시간
        let todayYear = now.getFullYear(); 
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        // const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        // let dayOfWeek = week[now.getDay()];
        // let hours = now.getHours();
        // let minutes = now.getMinutes();

        return todayYear + '년' + todayMonth + '월' + todayDate + '일';
    }


    return (
            <StyledDiv>{todayTime().slice(0, 9)}
              <span>{todayTime().slice(9, 12)}</span>
              <span>{todayTime().slice(12, 19)}</span>
            </StyledDiv>
    );
};

export default ToDay;