const Ex = ({ foodMenus }) => {
  return (
    <>
      {/* <div
        className="box_2"
        style={{ backgroundColor: bgColor, fontSize: fontSize }}
      >
        {text}
      </div> */}

      <div>
        <h2>{foodMenus[0].title}메뉴</h2>
        <p>
          메인: {foodMenus[0].mainMenu}
          <br />
          서브 메뉴 : {foodMenus[0].subMenu}
        </p>
      </div>

      <h2>{foodMenus[1].title}메뉴</h2>
      <p>
        메인: {foodMenus[1].mainMenu}
        <br />
        서브 메뉴 : {foodMenus[1].subMenu}
      </p>

      <h2>{foodMenus[2].title}메뉴</h2>
      <p>
        메인: {foodMenus[2].mainMenu}
        <br />
        서브 메뉴 : {foodMenus[2].subMenu}
      </p>
    </>
  );
};

export default Ex;
