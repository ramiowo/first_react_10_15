import Contents from "./components/Contents";
import Ex from "./components/Ex";
// import "./style.css";

const menus = [
  {
    id: 0,
    title: "아침",
    mainMenu: "시리얼",
    subMenu: "커피",
  },
  {
    id: 1,
    title: "점심",
    mainMenu: "돈까스",
    subMenu: "커피",
  },
  {
    id: 2,
    title: "저녁",
    mainMenu: "마라탕",
    subMenu: "커피",
  },
];

const PropsEx = () => {
  return (
    <>
      {/* <Contents text="컨텐츠1" bgColor="salmon" />
      <Contents text="컨텐츠2" bgColor="lightblue" /> */}

      <Ex foodMenus={menus} />
    </>
  );
};

export default PropsEx;
