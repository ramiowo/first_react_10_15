import { styled } from "styled-components";

const SPlayWrap = styled.div`
  .progressWrap {
    height: 10px;
    background-color: #f1f1f1;
    border-radius: 10px;
    .bar {
      height: 100%;
      width: 70%;
      background-color: lightgray;
      border-radius: 10px;
    }
  }
  .timeWrap {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #dbdbdb;
    margin-top: 10px;
  }
`;

const PlayWrap = () => {
  return (
    <SPlayWrap>
      <div className="progressWrap">
        <div className="bar"></div>
      </div>

      <div className="timeWrap">
        <h3>5:54</h3>
        <h3>-3:04</h3>
      </div>
    </SPlayWrap>
  );
};

export default PlayWrap;
