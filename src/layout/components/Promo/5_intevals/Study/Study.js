import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const StudyText = styled.h6`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #6D6D6D;
`;

const RegBtn = styled.button`
  width: 240px;
  height: 48px;
  background: #6979F8;
  border: transparent;
  border-radius: 6px;
  margin: 0 auto;
  color: white;
  
  &:hover,
  &:focus,
  &:active {
    background:#5865CE;
  }
`;

const Study = () => {
  return(
    <DivStyled>
      <StudyText>
        Учитесь эффективно
      </StudyText>
      <RegBtn onClick>Зарегистрироваться</RegBtn>
    </DivStyled>
  )
}

export default Study;
