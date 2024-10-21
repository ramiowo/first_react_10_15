import { keyframes, styled } from "styled-components";

const PlayAni = keyframes`
0%{
  width: 0px;
}
100%{
  width: 300px;
}
`;

const Wrap = styled.div`
  width: 400px;
  height: 600px;
  margin: 0 auto;
  background-color: gray;
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
    font-size: 20px;
  }

  div {
    background-color: rgba(255, 255, 255, 0.3);
    width: 300px;
    height: 5px;
    border-radius: 10px;
    margin-top: 20px;
  }
  span {
    width: 60px;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const Mobil = () => {
  return (
    <div>
      <Wrap>
        <img src="https://i.ytimg.com/vi/rNpSYxIVWOo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoACzgOKAgwIABABGHIgRyg2MA8=&rs=AOn4CLCC7J3um5t772tRDP67vP59k9F__A  "></img>
        <p>calsiper</p>

        <div>
          <span></span>
        </div>

        <i class="fa-solid fa-backward"></i>
        <i class="fa-solid fa-pause"></i>
        <i class="fa-solid fa-forward"></i>
      </Wrap>
    </div>
  );
};

export default Mobil;
