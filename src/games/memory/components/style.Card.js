import style from 'styled-components';

export default style.div`
  .Card {
    width: 170px;
    height: 100px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #D0C9D6;
    box-sizing: border-box;
    border-radius: 8px;
  }

  .Card:hover {
    box-shadow: 5px 5px 5px rgba(52, 69, 221, 0.5);
    cursor: pointer;
  }

  .CardEng, .cardRus {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .active {
    background-color: #A5AFFB;
  }

  .right {
    background-color: #0AD1BD;
  }

  .error {
    background-color: #E10050;
  }

  .correct {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .correct:hover {
    cursor: not-allowed;
  }
`;
