// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEllipsis,
//   faBackward,
//   faPause,
//   faForward,
//   faVolumeOff,
//   faVolumeHigh,
// } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import TitleWrap from "./components/TitleWrap";
import PlayBtn from "./components/PlayBtn";
import Volume from "./components/Volume";
import PlayWrap from "./components/PlayWrap";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;
const CoverImg = styled.div`
  height: 450px;
  background: #dbdbdb url() no-repeat center / cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

// const TitleWrap = styled.div`
//   margin: 30px 0 20px 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-weight: 800;
// `;
// const More = styled.div`
//   width: 30px;
//   height: 30px;
//   background-color: #f1f1f1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   color: crimson;
// `;
// const PlayWrap = styled.div`
//   .progressWrap {
//     height: 10px;
//     background-color: #f1f1f1;
//     border-radius: 10px;
//     .bar {
//       height: 100%;
//       width: 70%;
//       background-color: lightgray;
//       border-radius: 10px;
//     }
//   }
//   .timeWrap {
//     display: flex;
//     justify-content: space-between;
//     font-size: 14px;
//     color: #dbdbdb;
//     margin-top: 10px;
//   }
// `;
// const PlayBtn = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin: 30px 0 30px 0;
//   font-size: 50px;
//   .icons:nth-child(1),
//   .icons:nth-child(3) {
//     font-size: 35px;
//   }
// `;
// const Volume = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: lightgray;
//   .progress {
//     width: 80%;
//     height: 7px;
//     background-color: #f1f1f1;
//     border-radius: 10px;
//     overflow: hidden;
//     .bar {
//       width: 50%;
//       height: 100%;
//       background-color: lightgray;
//     }
//   }
// `;

export const MusicApp = () => {
  return (
    <Wrap>
      <CoverImg></CoverImg>
      <TitleWrap />;
      {/* <TitleWrap>
        <h3>Betthoven:Piano Concerto No.1</h3>
        <More>
          <FontAwesomeIcon icon={faEllipsis} />
        </More>
      </TitleWrap> */}
      <PlayWrap />
      {/* <PlayWrap>
        <div className="progressWrap">
          <div className="bar"></div>
        </div>

        <div className="timeWrap">
          <h3>5:54</h3>
          <h3>-3:04</h3>
        </div>
      </PlayWrap> */}
      <PlayBtn />
      {/* <PlayBtn>
        <div className="icons">
          <FontAwesomeIcon icon={faBackward} />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faPause} />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faForward} />
        </div>
      </PlayBtn> */}
      <Volume />
      {/* <Volume>
        <FontAwesomeIcon icon={faVolumeOff} />
        <div className="progress">
          <div className="bar"></div>
        </div>
        <FontAwesomeIcon icon={faVolumeHigh} />
      </Volume> */}
    </Wrap>
  );
};
