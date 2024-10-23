import { useState } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(porops) => porops.$color};
`;

const Event = () => {
  const [bgColor, setBgColor] = useState("gold");
  const [on, setOn] = useState(true);

  const onClcikBox = () => {
    //   if (bgColor === "gold") {
    //     setBgColor("cornflowerblue");
    //   } else {
    //     setBgColor("gold");
    //   }
    // };

    // if (on === true) {
    //   setBgColor("cornflowerblue");
    //   setOn(false);
    // } else if (on === false) {
    //   setBgColor("gold");
    //   setOn(true);
    // }

    if (on) {
      setBgColor("cornflowerblue");
      setOn(false);
    } else if (!on) {
      setBgColor("gold");
      setOn(true);
    }
  };

  return (
    <div>
      <Box $color={bgColor} onClick={onClcikBox}></Box>
    </div>
  );
};

export default Event;
