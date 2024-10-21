import { keyframes, styled } from "styled-components";

const PlayAni = keyframes`
0%{
    width:0px;
}
100%{
    width:300px;
}`;

const Wrap = styled.div`
  width: 350px;
  height: 600px;
  margin: 0 auto;
  border-radius: 30px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
    border-radius: 20px;
  }

  p {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }
`;

const PlayBar = styled.div`
  div {
    background-color: rgba(0, 0, 0, 0.3);
    width: 300px;
    height: 5px;
    border-radius: 10px;
    margin-top: 20px;
    div {
      width: 60px;
      height: 5px;
      background-color: rgba(0, 0, 0, 0.8);
      animation: ${PlayAni} 120s;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #333333;
  }
`;

const PlayBtn = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  i {
    font-size: 30px;
    margin: 0 20px;
    color: #333;
  }
`;

const SoundBar = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  div {
    background-color: rgba(0, 0, 0, 0.3);
    width: 240px;
    height: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin: 0 auto;
    div {
      width: 140px;
      height: 5px;
      background-color: rgba(0, 0, 0, 0.8);
      margin: 0%;
    }
  }
  span {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  i {
    font-size: 12px;
    color: #333;
  }
`;

const Mobil = () => {
  return (
    <div>
      <Wrap>
        <img src="https://i.ytimg.com/vi/rNpSYxIVWOo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoACzgOKAgwIABABGHIgRyg2MA8=&rs=AOn4CLCC7J3um5t772tRDP67vP59k9F__A  "></img>
        <p>calsiper</p>

        <PlayBar>
          <div>
            <div></div>
          </div>
          <ul>
            <li>0:00</li>
            <li>3:00</li>
          </ul>
        </PlayBar>

        <PlayBtn>
          <i class="fa-solid fa-backward"></i>
          <i class="fa-solid fa-pause"></i>
          <i class="fa-solid fa-forward"></i>
        </PlayBtn>

        <SoundBar>
          <i class="fa-solid fa-volume-off"></i>

          <div>
            <div></div>
          </div>

          <i class="fa-solid fa-volume-high"></i>
        </SoundBar>
      </Wrap>
    </div>
  );
};

export default Mobil;
